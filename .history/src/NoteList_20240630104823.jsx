import React from "react"
import { Row, Col } from "react-bootstrap"
import Note from "./Note"

function NoteList({ notes }) {
	return (
		<Row>
			{notes.map((note, index) => (
				<Col key={index}>
					<Note note={note} />
				</Col>
			))}
		</Row>
	)
}
