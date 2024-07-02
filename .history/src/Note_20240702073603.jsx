/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Card, Button, Modal } from "react-bootstrap"

function Note({ note, deleteNote, editNote }) {
	return (
		<Modal {...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="form"
		>
			<Card>
				<Card.Header>
					<Card.Title>{note.title}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>{note.content}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button
						variant="primary"
						className="me-2"
						onClick={() => setModalShow(true) editNote(note.id)}
					>
						Edit
					</Button>
					<Button
						variant="danger"
						onClick={() => deleteNote(note.id)}
					>
						Delete
					</Button>
				</Card.Footer>
			</Card>
		</Modal>
	)
}

export default Note
