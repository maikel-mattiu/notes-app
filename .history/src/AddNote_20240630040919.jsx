/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function AddNote(props) {
	const [title, setTitle] = useState("")
	const [note, setNote] = useState("")

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Form.Group controlId="addNote.Title">
				<Modal.Header>
					<Form.Control
						type="text"
						placeholder="Note Title"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write a note....."
						value={note}
						onChange={(event) => setNote(event.target.value)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={props.onHide}
						variant="danger"
					>
						Close
					</Button>
					<Button onClick={props.onHide}>Save Note</Button>
				</Modal.Footer>
			</Form.Group>
		</Modal>
	)
}

export default AddNote
