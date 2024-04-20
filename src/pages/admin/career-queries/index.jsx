"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { db, projectStorage } from "../../../firebase/firebase";
import { useAuth } from "../../../firebase/auth";

import { collection, query, getDocs, doc, deleteDoc } from "firebase/firestore";
import DashboardLayout from "../../../layouts/DashboardLayout";
import CareerQueries from "../../../components/dashboard/Careers";
import { deleteObject, ref } from "firebase/storage";

export default function Career() {
	const [applications, setApplications] = useState([]);

	const { signOut, authUser, isLoading } = useAuth();
	const router = useRouter();

	const fetchApplications = async () => {
		const q = query(collection(db, "applications"));
		const querySnapshot = await getDocs(q);
		let data = [];
		querySnapshot.forEach((query) => {
			// console.log(query.data());
			data.push({ ...query.data(), id: query.id });
		});
		setApplications(data);
	};

	useEffect(() => {
		fetchApplications();
	}, []);

	useEffect(() => {
		if (!isLoading && !authUser) {
			router.push("/login");
		}
	}, [authUser, isLoading]);

	const handleDelete = async (application) => {
		try {
			await deleteDoc(doc(db, "applications", application.id));

			// Delete corresponding folder in Firebase Storage
			const storageRef = ref(projectStorage, `Resume/${application.name}`);
			await deleteObject(storageRef);

			const updatedApplications = applications.filter((a) => a.id !== application.id);
			setApplications(updatedApplications);

			toast.success("Application deleted successfully");
		} catch (error) {
			toast.error("Error deleting application ! Please try again by refreshing the page");
		}
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<DashboardLayout>
			<CareerQueries
				data={applications}
				itemsPerPage={5}
				currentPage={currentPage}
				onPageChange={handlePageChange}
				onEdit={() => {}}
				onDelete={handleDelete}
				heading={"Career Applications"}
			/>
		</DashboardLayout>
	);
}
