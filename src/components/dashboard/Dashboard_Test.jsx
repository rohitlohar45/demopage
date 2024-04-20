import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import AddEditProjectModal from "./ProjectModal";
import { Button, CardGroup, Col, Pagination, Row, Table } from "react-bootstrap";
// Import Bootstrap icons
import TableComponent from "./Table";
import TestModal from "./TestModal";

const Dashboard_Test = ({
	tests,
	onEdit,
	onDelete,
	onAddNewTest,
	itemsPerPage = 5,
	currentPage = 1,
	onPageChange,
	isDashboard = false,
	heading = "",
}) => {
	//   const [searchQuery, setSearchQuery] = useState("");
	const [selectedTest, setSelectedTest] = useState(null);
	const [filteredTest, setFilteredTest] = useState([]);
	const [show, setShow] = useState(false);

	const handleEditProject = (project) => {
		setSelectedTest(project);
		setShow(true);
	};

	useEffect(() => {
		// console.log("show", show);
		if (!show) setSelectedTest(null);
	}, [show]);

	const columns = [
		{ header: "Name", field: "name" },
		{ header: "Description", field: "description" },
		{ header: "Category", field: "category" },
	];

	useEffect(() => {
		setFilteredTest(tests);
	}, [tests]);

	//   useEffect(() => {
	//     if (searchQuery) {
	//       const searchedProjects = projects.filter((project) =>
	//         project.name.toLowerCase().includes(searchQuery.toLowerCase())
	//       );
	//       setFilteredTest(searchedProjects);
	//     } else {
	//       setFilteredTest(projects);
	//     }
	//   }, [searchQuery]);

	const handleAddEditTest = (formData) => {
		// Check if formData has an ID to determine if it's an add or edit action
		if (formData.id) {
			// Edit existing project
			onEdit(formData);
		} else {
			// Add new project
			onAddNewTest(formData);
		}
		setSelectedTest(null); // Reset selected project after adding/editing
	};

	return (
		<div style={styles.container} className="main-content">
			<h1 style={styles.heading} className="text-2xl font-semibold mb-4">
				{heading}
			</h1>
			{isDashboard ? (
				<div style={styles.searchBar} className="mb-4">
					<TestModal
						addProject={handleAddEditTest}
						action={selectedTest ? "Edit" : "Add"}
						selectedTest={selectedTest}
						show={show}
						setShow={setShow}
					/>
				</div>
			) : null}

			<TableComponent
				data={filteredTest}
				columns={columns}
				itemsPerPage={5}
				currentPage={currentPage}
				onPageChange={onPageChange}
				onDelete={onDelete}
				onEdit={handleEditProject}
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

export default Dashboard_Test;
