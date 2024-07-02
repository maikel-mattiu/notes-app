/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

function AddNote({ addNote }) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		addNote(title, content)
		setTitle("")
		setContent("")
	}

	return (
		<Form
			onSubmit={handleSubmit}
			className="mb-4"
		>
			<Form.Group controlId="formTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="formContent">
				<Form.Label>Content</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Enter content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit"
				className="mt-2"
			>
				Add Note
			</Button>
		</Form>
	)
}

export default AddNote
