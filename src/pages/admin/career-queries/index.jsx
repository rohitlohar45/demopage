import React from "react";
import DashboardLayout from "../../../layouts/login";

const index = () => {
	return (
		<DashboardLayout>
			<div className="main-content">
				<h1>Welcome to the Dashboard</h1>
				<p>This is the main content area of your dashboard.</p>
				<div style={{ display: "flex", gap: 5 }}></div>
			</div>
		</DashboardLayout>
	);
};

export default index;
