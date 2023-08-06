import React, { useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import {
	BsChevronLeft,
	BsChevronRight,
	BsFillSkipStartFill,
	BsFillSkipEndFill,
} from "react-icons/bs";

const TableComponent = ({
	data,
	columns,
	itemsPerPage,
	onPageChange,
	currentPage,
	onEdit,
	onDelete,
}) => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(data.length / itemsPerPage);

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column.header}</th>
						))}
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{paginatedData.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((column, colIndex) => (
								<td key={colIndex}>{row[column.field]}</td>
							))}
							<td style={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
								<div style={styles.buttons}>
									<Button
										className="primary-button"
										// style={styles.editButton}
										onClick={() => onEdit(project)}
									>
										Edit
									</Button>
									<Button
										className="danger-button"
										// style={styles.deleteButton}
										onClick={() => onDelete(project)}
									>
										Delete
									</Button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Pagination>
				<Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
					<BsChevronLeft />
				</Pagination.Prev>
				{[...Array(totalPages).keys()].map((pageNum) => (
					<Pagination.Item
						key={pageNum + 1}
						active={pageNum + 1 === currentPage}
						onClick={() => onPageChange(pageNum + 1)}
					>
						{pageNum + 1}
					</Pagination.Item>
				))}
				<Pagination.Next
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<BsChevronRight />
				</Pagination.Next>
			</Pagination>
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

export default TableComponent;
