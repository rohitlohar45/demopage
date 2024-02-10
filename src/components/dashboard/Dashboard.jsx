import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddEditProjectModal from "./ProjectModal";
import { Button, CardGroup, Col, Pagination, Row, Table } from "react-bootstrap";
// Import Bootstrap icons
import TableComponent from "./Table";

const Dashboard = ({
	projects,
	onEdit,
	onDelete,
	onAddNewProject,
	itemsPerPage = 5,
	currentPage = 1,
	onPageChange,
	isDashboard = false,
	heading = "",
}) => {
	const [searchQuery, setSearchQuery] = useState("");

	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedProjects = projects.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(projects.length / itemsPerPage);

	const handleAddEditProject = (project) => {
		// Update your project data or perform other actions here
		if (project.id) {
			onEdit(project);
		} else {
			// Adding a new project
			// Perform your logic here to add the new project
		}
	};

	const columns = [
		{ header: "Name", field: "name" },
		{ header: "Description", field: "description" },

		// ... Add more columns as needed
	];

	const filteredProjects = projects.filter((project) =>
		project.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div style={styles.container} className="main-content">
			<h1 style={styles.heading} className="text-2xl font-semibold mb-4">
				{heading}
			</h1>
			{/* <div style={styles.searchBar} className="mb-4">
				<input
					style={{ ...styles.searchInput, marginRight: "8px" }}
					type="text"
					placeholder="Search projects..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<AddEditProjectModal />

			</div> */}
			{isDashboard ? (
				<div style={styles.searchBar} className="mb-4">
					<input
						style={{ ...styles.searchInput, marginRight: "8px" }}
						type="text"
						placeholder="Search projects..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<AddEditProjectModal addProject={onAddNewProject} />
				</div>
			) : null}

			<TableComponent
				data={projects}
				columns={columns}
				itemsPerPage={5}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>
		</div>
	);
};

const styles = {
	container: {
		padding: "20px",
	},
	heading: {
		fontSize: "1.5rem",
		marginBottom: "1rem",
	},
	addButton: {
		backgroundColor: "#4CAF50",
		color: "white",
		padding: "8px 16px",
		borderRadius: "8px",
		cursor: "pointer",
	},
	searchBar: {
		marginBottom: "1rem",
	},
	searchInput: {
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "6px 12px",
		width: "250px",
	},
	projectGrid: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		width: "50%",
		height: "50%",
	},
	projectWrapper: {
		// width: "80%",

		width: "calc(50% - 20px)", // Adjust width to account for spacing and margins
		padding: "10px", // Add spacing around each project
		boxSizing: "border-box", // Ensure padding doesn't affect total width
	},
};

export default Dashboard;
