/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Card, Button } from "react-bootstrap"

function Note({ note, deleteNote, editNote, onHide, handleEdit }) {
	return (
		<div className="d-flex flex-wrap">
			{notes.map((note) => (
				<Card key={note.id}>
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
							onClick={() => editNote(note.id)}
							onHide={onHide}
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
			))}
		</div>
	)
}

export default Note
