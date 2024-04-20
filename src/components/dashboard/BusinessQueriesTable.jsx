import React from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { FiTrash } from "react-icons/fi";

const BusinessQueriesTable = ({ data, itemsPerPage, currentPage, onPageChange, onDelete }) => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedData = data?.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(data?.length / itemsPerPage);

	return (
		<div style={styles.container}>
			<Table bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{paginatedData?.map((query, index) => (
						<tr key={index}>
							<td>{query.name}</td>
							<td>{query.message}</td>
							<td>{query.email}</td>
							<td style={styles.actions}>
								<Button variant="danger" onClick={() => onDelete(query)}>
									<FiTrash />
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			{data?.length > 5 && (
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

export default BusinessQueriesTable;
