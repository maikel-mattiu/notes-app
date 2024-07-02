/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function EditNote({ editNote, isEditing, currentNote, onHide, ...props }) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	useEffect(() => {
		if (isEditing) {
			setTitle(currentNote.title)
			setContent(currentNote.content)
		} else {
			setTitle("")
			setContent("")
		}
	}, [isEditing, currentNote]) // Runs the effect when isEditing or currentNote changes

	const submitNote = (event) => {
		event.preventDefault()
		if (isEditing) {
			editNote(currentNote.id, title, content)
		}
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
			className="form"
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
						onClick={onHide}
						variant="danger"
					>
						Close
					</Button>
					<Button
						type="submit"
						variant="primary"
					>
						Update Note
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default EditNote
