/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import Sidebar from "../components/dashboard/sidebar";
import "tailwindcss/tailwind.css";

const DashboardLayout = ({ children, logoClassText }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/assets/css/style-light.css" />
				<link rel="stylesheet" href="/assets/css/dashboard.css" />
			</Head>
			<div
				style={{
					display: "flex",
				}}
			>
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default DashboardLayout;
