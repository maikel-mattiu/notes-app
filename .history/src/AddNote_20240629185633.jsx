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
			<Form.Group controlId="addNote">
				<Modal.Header closeButton>
					<Form.Control
						type="text"
						placeholder="Title"
					/>
				</Modal.Header>
				<Modal.Body>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlTextarea1"
					>
						<Form.Label>Example textarea</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
					<Button onClick={props.onHide}>Save Changes</Button>
				</Modal.Footer>
			</Form.Group>
		</Modal>
	)
}

export default AddNote
