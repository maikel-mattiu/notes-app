import React from "react"
import { Card, Button } from "react-bootstrap"

function Note({ note }) {
	return (
		<Card>
			<Card.Header>
				<Card.Title>{note.title}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Text>{note.content}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Edit</Button>
			</Card.Footer>
		</Card>
	)
}
