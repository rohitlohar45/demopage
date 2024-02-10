/* eslint-disable @next/next/no-css-tags */
import React, { useState } from "react";
import Head from "next/head";
import Sidebar from "../components/dashboard/sidebar";
import "tailwindcss/tailwind.css";
import {
	BsFillArchiveFill,
	BsFillGrid3X3GapFill,
	BsPeopleFill,
	BsFillBellFill,
} from "react-icons/bs";
import Header from "../components/dashboard/Header";
import ResSidebar from "../components/dashboard/ResSidebar";
import Home from "../components/dashboard/Home";
const DashboardLayout = ({ children, logoClassText }) => {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/assets/css/style-light.css" />
				<link rel="stylesheet" href="/assets/css/dashboard.css" />
				<link rel="stylesheet" href="/assets/css/res-dashboard.css" />
			</Head>

			<div className="grid-container">
				<Header OpenSidebar={OpenSidebar} />
				<ResSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
				<Home children={children} />
			</div>
			{/* <main className="main-container">
				<div className="main-title">
					<h3>DASHBOARD</h3>
				</div>

				<div className="main-cards">
					<div className="card">
						<div className="card-inner">
							<h3>PRODUCTS</h3>
							<BsFillArchiveFill className="card_icon" />
						</div>
						<h1>300</h1>
					</div>
					<div className="card">
						<div className="card-inner">
							<h3>CATEGORIES</h3>
							<BsFillGrid3X3GapFill className="card_icon" />
						</div>
						<h1>12</h1>
					</div>
					<div className="card">
						<div className="card-inner">
							<h3>CUSTOMERS</h3>
							<BsPeopleFill className="card_icon" />
						</div>
						<h1>33</h1>
					</div>
					<div className="card">
						<div className="card-inner">
							<h3>ALERTS</h3>
							<BsFillBellFill className="card_icon" />
						</div>
						<h1>42</h1>
					</div>
				</div>

				<div className="charts">{children}</div>
			</main> */}
			{/* <div
				style={{
					display: "flex",
				}}
			>
				<Sidebar />
				
			</div> */}
		</>
	);
};

export default DashboardLayout;
