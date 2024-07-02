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
					<h4>Centered Modal</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
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
