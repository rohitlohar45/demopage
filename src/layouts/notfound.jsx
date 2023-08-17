/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DashboardLayout = ({ children, logoClassText }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/assets/css/dashboard.css" />
			</Head>
			<div
				style={{
					display: "flex",
				}}
			>
				{children}
			</div>
		</>
	);
};

export default DashboardLayout;
