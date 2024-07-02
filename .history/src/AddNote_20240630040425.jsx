/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { Modal, Button, Form } from "react-bootstrap"

function AddNote(props) {
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
					/>
				</Modal.Header>
				<Modal.Body>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Write a note....."
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
