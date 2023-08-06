import Link from "next/link";
import React from "react";

const Sidebar = () => {
	return (
		<div style={styles.sidebar} className="sidebar">
			<img src="/assets/img/logo-1.png" style={styles.logo} alt="Logo" />
			<ul style={styles.menu}>
				<li style={styles.menuItem}>
					<Link href={"/admin/dashboard"}>
						<a>Projects</a>
					</Link>
				</li>
				<li style={styles.menuItem}>
					<Link href={"/admin/business-queries"}>
						<a>Business Queries</a>
					</Link>
				</li>
				<li style={styles.menuItem}>
					<Link href={"/admin/feedback"}>
						<a>Feedback</a>
					</Link>
				</li>
				<li style={styles.menuItem}>
					<Link href={"/admin/career-queries"}>
						<a>Career Query</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

const styles = {
	sidebar: {
		display: "flex",
		flexDirection: "column",
		height: "100vh", // Set the sidebar height to 100% of the viewport height
		padding: "20px",
	},
	logo: {
		marginBottom: "20px",
	},
	menu: {
		flexGrow: 1, // Make the menu take up the remaining vertical space
		listStyle: "none",
		padding: 0,
	},
	menuItem: {
		padding: "10px",
		cursor: "pointer",
		transition: "background-color 0.2s",
	},
};

export default Sidebar;
