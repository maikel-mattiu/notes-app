/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function AddNote(props, { addNote }) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const submitNote = (event) => {
		event.preventDefault()
		addNote(title, content)
		setTitle("")
		setContent("")
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Form onSubmit={submitNote}>
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
						value={content}
						onChange={(event) => setContent(event.target.value)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={props.onHide}
						variant="danger"
					>
						Close
					</Button>
					<Button
						type="submit"
						onClick={props.onHide}
					>
						Save Note
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddNote
