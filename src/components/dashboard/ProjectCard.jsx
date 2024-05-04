import { Button, Card, CardGroup } from "react-bootstrap";

const ProjectCard = ({ project, onEdit, onDelete }) => {
	return (
		<>
			<Card>
				<Card.Img variant="top" src={project.imageUrl} />
				<Card.Body>
					<Card.Title>{project.name}</Card.Title>
					{/* <Card.Text>{project.description}</Card.Text> */}
				</Card.Body>
				<Card.Footer>
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
				</Card.Footer>
			</Card>
			{/* <div style={styles.card}>
				<h3 style={styles.title}>{project.name}</h3>
				<p style={styles.description}>{project.description}</p>
				<img style={styles.image} src={project.imageUrl} alt="" />
				<div style={styles.buttons}></div>
			</div> */}
		</>
	);
};

const styles = {
	card: {
		width: "calc(50% - 16px)",
		margin: "8px",
		border: "1px solid #ccc",
		borderRadius: "8px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
		padding: "16px",
	},
	title: {
		fontSize: "1.5rem",
		fontWeight: "bold",
	},
	description: {
		color: "#666",
		marginTop: "8px",
	},
	image: {
		marginTop: "12px",
		maxHeight: "128px",
		width: "100%",
		objectFit: "cover",
	},
	buttons: {
		marginTop: "12px",
		display: "flex",
		justifyContent: "space-between",
	},
	editButton: {
		color: "#3498db",
		cursor: "pointer",
	},
	deleteButton: {
		color: "#e74c3c",
		cursor: "pointer",
	},
};

export default ProjectCard;
