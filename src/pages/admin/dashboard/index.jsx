"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { db, projectStorage } from "../../../firebase/firebase";
import { useAuth } from "../../../firebase/auth";
import Login from "../../../layouts/login";

import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function ProfilePage() {
	const [projects, setProjects] = useState([]);

	const { signOut, authUser, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		console.log(authUser);
	}, []);

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

		// Execute the query and get a snapshot of the results.
		const querySnapshot = await getDocs(q);

		// Extract the data from each todo document and add it to the data array.
		let data = [];
		querySnapshot.forEach((project) => {
			console.log(project.data());
			data.push({ ...project.data(), id: project.id });
		});

		// Set the todos state with the data array.
		setProjects(data);
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	const handleCreateProject = async () => {
		try {
			// Upload the selected file to Firebase storage
			if (file) {
				const storageRef = ref(projectStorage, file.name);
				const uploadTask = uploadBytesResumable(storageRef, file);

				uploadTask.on(
					"state_changed",
					(snapshot) => {
						// Update progress if needed
					},
					(error) => {
						// Handle errors during file upload
						console.error("Error uploading file", error);
					},
					async () => {
						// File upload successful
						console.log("File upload successful");

						// Get the download URL of the uploaded file
						const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

						// Add the project to the Firestore "projects" collection
						const newProject = {
							name,
							description,
							imageUrl: downloadURL,
						};
						const projectRef = await addDoc(collection(db, "projects"), newProject);

						console.log("Project created successfully with ID:", projectRef.id);

						setProjects([...projects, newProject]);

						// Clear input fields
						setName("");
						setDescription("");
						setFile(null);
					}
				);
			} else {
				// If no file is selected, create the project without the image URL
				const newProject = {
					name,
					description,
				};
				const projectRef = await addDoc(collection(db, "projects"), newProject);

				console.log("Project created successfully with ID:", projectRef.id);

				// Clear input fields
				setName("");
				setDescription("");
			}
		} catch (error) {
			console.error("An error occurred while creating the project", error);
		}
	};

	return (
		<>
			<Login>
				<div className="flex flex-col items-center justify-center min-h-screen py-2">
					<h1>Profile</h1>
					<hr />
					<p>Profile page</p>
					<h2 className="p-1 rounded bg-green-500">{authUser?.username}</h2>
					<hr />
					<div style={{ gap: 10 }}>
						<button
							style={{ marginRight: "10px" }}
							onClick={signOut}
							className="btn-curve btn-color"
						>
							Logout
						</button>
					</div>
					<div>
						<div>
							<input
								type="text"
								placeholder="Project Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Project Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<input type="file" onChange={handleFileChange} />
							<button onClick={handleCreateProject}>Create Project</button>
						</div>
					</div>
					<div>
						{projects.map((project, i) => {
							return (
								<div key={i}>
									<h3>{project.name}</h3>
									<p>{project.description}</p>
									<img
										id="project-image"
										style={{ height: "200px !important", width: "200px !important" }}
										src={project.imageUrl}
										alt=""
									/>
								</div>
							);
						})}
					</div>
				</div>
			</Login>
		</>
	);
	return (
		<Login>
			<div className="dashboard">
				{/* Sidebar */}
				<div className="sidebar">
					<img src="/assets/img/logo-1.png" style={{ marginBottom: 20 }}></img>
					<ul>
						<li>Projects</li>
						<li>Business Query</li>
						<li>Feedback</li>
						<li>Career Query</li>
					</ul>
				</div>

				{/* Main Content */}
				<div className="main-content">
					<h1>Welcome to the Dashboard</h1>
					<p>This is the main content area of your dashboard.</p>
					<div style={{ display: "flex", gap: 5 }}>
						{projects.map((project, i) => {
							return (
								<div key={i}>
									<h3>{project.name}</h3>
									<p>{project.description}</p>
									<img
										id="project-image"
										style={{
											height: "200px !important",
											width: "200px !important",
										}}
										src={project.imageUrl}
										alt=""
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Login>
	);
}
