/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function AddNote({ addNote, onHide, ...props }) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const submitNote = (event) => {
		event.preventDefault()
		addNote(title, content)
		setTitle("")
		setContent("")
		onHide() // Close the modal after submitting the note
	}

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Form onSubmit={submitNote}>
				<Modal.Header className="form">
					<Form.Control
						type="text"
						placeholder="Note Title"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						className=""
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
						onClick={onHide}
						variant="danger"
					>
						Close
					</Button>
					<Button
						type="submit"
						variant="primary"
					>
						Save Note
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddNote
