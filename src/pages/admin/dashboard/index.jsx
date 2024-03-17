"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db, projectStorage } from "../../../firebase/firebase";
import { useAuth } from "../../../firebase/auth";

import { collection, addDoc, query, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Dashboard from "../../../components/dashboard/Dashboard";
import DashboardLayout from "../../../layouts/DashboardLayout";
import ProjectToast from "../../../components/Toast";
import toast from "react-hot-toast";

export default function ProfilePage() {
	const [projects, setProjects] = useState([]);

	const { signOut, authUser, isLoading } = useAuth();
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !authUser) {
			router.push("/login");
		}
	}, [authUser, isLoading]);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
	};

	const fetchProjects = async () => {
		const q = query(collection(db, "projects"));
		const querySnapshot = await getDocs(q);
		let data = [];
		querySnapshot.forEach((project) => {
			console.log(project.data());
			data.push({ ...project.data(), id: project.id });
		});
		setProjects(data);
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	const handleCreateProject = async (project) => {
		console.log("Creating project", project);

		try {
			const { images, beforeImage, afterImage, process } = project;
			const uploadTasks = [];

			// Upload and set URL for each image field
			const uploadAndSetURL = async (imageField) => {
				if (project[imageField]) {
					const storageRef = ref(projectStorage, `${project.name}/${imageField}`);
					const uploadTask = uploadBytesResumable(storageRef, project[imageField]);
					await uploadTask;
					project[imageField] = await getDownloadURL(storageRef);
				}
			};

			// Upload images
			const imageFields = [
				"beforeImage",
				"afterImage",
				"thumbnail",
				"process.step1",
				"process.step2",
				"process.step3",
			];
			for (const field of imageFields) {
				await uploadAndSetURL(field);
			}

			// Upload additional images
			for (let i = 0; i < images.length; i++) {
				const storageRef = ref(projectStorage, `${project.name}/${i}`);
				const uploadTask = uploadBytesResumable(storageRef, images[i]);
				await uploadTask;
				const url = await getDownloadURL(storageRef);
				project.images[i] = url;
				uploadTasks.push(uploadTask);
			}

			// Wait for all upload tasks to complete
			await Promise.all(uploadTasks);

			// Add the project to the Firestore "projects" collection
			const projectRef = await addDoc(collection(db, "projects"), project);
			toast.success("Project created successfully");
			console.log("Project created successfully with ID:", projectRef.id);

			// Optionally, notify user or perform other actions after successful creation
			setProjects([...projects, project]);

			// Clear input fields or reset form data
			// Example: setName(""), setDescription(""), setFile(null), etc.
		} catch (error) {
			toast.error("An error occurred while creating the project");
			console.error("An error occurred while creating the project", error);
		}
	};

	const handleEdit = async (project) => {
		console.log("Editing project", project);

		try {
			const { id, images, beforeImage, afterImage, process } = project;
			const uploadTasks = [];

			// Upload and set URL for each image field
			const uploadAndSetURL = async (imageField) => {
				if (project[imageField]) {
					const storageRef = ref(projectStorage, `${project.name}/${imageField}`);
					const uploadTask = uploadBytesResumable(storageRef, project[imageField]);
					await uploadTask;
					project[imageField] = await getDownloadURL(storageRef);
				}
			};

			// Upload images that are added or updated
			// Update beforeImage if changed
			if (beforeImage) {
				await uploadAndSetURL("beforeImage");
			}
			// Update afterImage if changed
			if (afterImage) {
				await uploadAndSetURL("afterImage");
			}
			// Update thumbnail if changed
			if (project.thumbnail) {
				await uploadAndSetURL("thumbnail");
			}
			// Update process step images if changed
			for (let i = 1; i <= 3; i++) {
				const stepField = `process.step${i}`;
				if (process && process[`step${i}`]) {
					await uploadAndSetURL(stepField);
				}
			}

			// Upload additional images
			for (let i = 0; i < images.length; i++) {
				const storageRef = ref(projectStorage, `${project.name}/${i}`);
				const uploadTask = uploadBytesResumable(storageRef, images[i]);
				await uploadTask;
				const url = await getDownloadURL(storageRef);
				project.images[i] = url;
				uploadTasks.push(uploadTask);
			}

			// Wait for all upload tasks to complete
			await Promise.all(uploadTasks);

			// Update the project in the Firestore "projects" collection
			const projectRef = doc(db, "projects", id);
			await setDoc(projectRef, project, { merge: true });
			console.log("Project edited successfully:", id);
			toast.success("Project edited successfully");

			setProjects((prevProjects) => {
				const updatedProjects = prevProjects.map((p) => (p.id === project.id ? project : p));
				return updatedProjects;
			});

			// Optionally, notify user or perform other actions after successful edit
		} catch (error) {
			toast.error("An error occurred while editing the project");
			console.error("An error occurred while editing the project", error);
		}
	};

	const handleDelete = async (project) => {
		try {
			const projectRef = doc(db, "projects", project.id);
			await deleteDoc(projectRef);

			// Remove the project from the local state
			const updatedProjects = projects.filter((p) => p.id !== project.id);
			setProjects(updatedProjects);

			toast.success("Project deleted successfully");
		} catch (error) {
			toast.error("Error deleting project! Please try again by refreshing the page");
			console.error("Error deleting project:", error);
		}
	};
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const handleShowToast = (type, message) => {
		setToastType(type);
		setToastMessage(message);
		setShowToast(true);
	};

	const handleCloseToast = () => {
		setShowToast(false);
		setToastMessage("");
		setToastType("");
	};

	return (
		<DashboardLayout>
			<Dashboard
				projects={projects}
				onEdit={handleEdit}
				onDelete={handleDelete}
				onAddNewProject={handleCreateProject}
				onPageChange={handlePageChange}
				currentPage={currentPage}
				isDashboard={true}
				heading={"Welcome to Dashboard"}
			/>
			<ProjectToast
				show={showToast}
				onClose={handleCloseToast}
				type={toastType} // 'success' or 'error'
				message={toastMessage} // Message to display in the toast
			/>
		</DashboardLayout>
	);
}
