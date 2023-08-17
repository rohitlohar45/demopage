import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterLogo = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<img
				src="/assets/img/loading_logo.png"
				alt="Logo"
				style={{
					width: "100px", // Adjust as needed
					height: "100px", // Adjust as needed
					marginRight: "10px", // Adjust as needed
				}}
			/>
			<Typewriter
				options={{
					strings: ["Peace Interiors"],
					autoStart: true,
					loop: true,
				}}
				style={{
					fontSize: "24px", // Adjust as needed
					marginTop: "0", // Adjust as needed
				}}
			/>
		</div>
	);
};

export default TypewriterLogo;
