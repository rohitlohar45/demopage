/* eslint-disable @next/next/no-css-tags */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/dashboard/Header";
import ResSidebar from "../components/dashboard/ResSidebar";
import Home from "../components/dashboard/Home";
import { useAuth } from "../firebase/auth";
const DashboardLayout = ({ children }) => {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
	const { authUser } = useAuth();
	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/assets/css/style-light.css" />
				<link rel="stylesheet" href="/assets/css/dashboard.css" />
				<link rel="stylesheet" href="/assets/css/res-dashboard.css" />
				<link rel="stylesheet" href="/assets/css/login.css" />
			</Head>

			<div className="grid-container">
				{authUser ? (
					<>
						<Header OpenSidebar={OpenSidebar} />
						<ResSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
					</>
				) : null}
				<Home children={children} />
			</div>
		</>
	);
};

export default DashboardLayout;
