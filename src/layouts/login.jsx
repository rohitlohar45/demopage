/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const Login = ({ children, logoClassText }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/assets/css/style-light.css" />
			</Head>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				{children}
			</div>
		</>
	);
};

export default Login;
