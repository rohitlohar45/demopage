import React from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { FiTrash } from "react-icons/fi";

const CareerQueries = ({ data, itemsPerPage, currentPage, onPageChange, onDelete }) => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedData = data?.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(data?.length / itemsPerPage);
	const isEmpty = data && data.length === 0;

	return (
		<div style={styles.container}>
			<Table bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Position</th>
						<th>Resume</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{isEmpty ? (
						<tr>
							<td colSpan="6" className="text-center">
								No data available
							</td>
						</tr>
					) : (
						paginatedData?.map((application, index) => (
							<tr key={index}>
								<td>{application.name}</td>
								<td>{application.number}</td>
								<td>{application.email}</td>
								<td>{application.applyFor}</td>
								<td>
									{application.file && (
										<a href={application.file} target="_blank" rel="noopener noreferrer">
											<i className="fas fa-file-pdf"></i>
										</a>
									)}
								</td>

								<td style={styles.actions}>
									<Button variant="danger" onClick={() => onDelete(application)}>
										<FiTrash />
									</Button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</Table>
			{!isEmpty && data?.length > 5 && (
				<Pagination>
					<Pagination.Prev
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
					/>
					{[...Array(totalPages)].map((_, index) => (
						<Pagination.Item
							key={index}
							active={currentPage === index + 1}
							onClick={() => onPageChange(index + 1)}
						>
							{index + 1}
						</Pagination.Item>
					))}
					<Pagination.Next
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
					/>
				</Pagination>
			)}
		</div>
	);
};

const styles = {
	container: {
		padding: "20px",
	},
	actions: {
		display: "flex",
		gap: 5,
	},
};

export default CareerQueries;
