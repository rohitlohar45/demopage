"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../firebase/auth";
import Login from "../../../layouts/DashboardLayout";

import { collection, addDoc, query, getDocs, doc, deleteDoc } from "firebase/firestore";
import Dashboard from "../../../components/dashboard/Dashboard";
import DashboardLayout from "../../../layouts/DashboardLayout";
import BusinessQueriesTable from "../../../components/dashboard/BusinessQueriesTable";

export default function Career() {
	const [queries, setQueries] = useState([]);

	const { signOut, authUser, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		// console.log(authUser);
	}, []);

	useEffect(() => {
		if (!isLoading && !authUser) {
			router.push("/login");
		}
	}, [authUser, isLoading]);

	const fetchQueries = async () => {
		const q = query(collection(db, "queries"));
		const querySnapshot = await getDocs(q);
		let data = [];
		querySnapshot.forEach((query) => {
			// console.log(query.data());
			data.push({ ...query.data(), id: query.id });
		});
		setQueries(data);
	};

	useEffect(() => {
		fetchQueries();
	}, []);

	const handleDelete = async (query) => {
		try {
			const queryRef = doc(db, "queries", query.id);
			await deleteDoc(queryRef);

			// Remove the project from the local state
			const updatedQueries = queries.filter((q) => q.id !== query.id);
			setQueries(updatedQueries);

			toast.success("Query deleted successfully");
		} catch (error) {
			toast.error("Error deleting query ! Please try again by refreshing the page");
		}
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<DashboardLayout>
			<BusinessQueriesTable
				data={queries}
				itemsPerPage={5}
				currentPage={currentPage}
				onPageChange={handlePageChange}
				onEdit={() => {}}
				onDelete={handleDelete}
				heading={"Business Queries"}
			/>
		</DashboardLayout>
	);
}
