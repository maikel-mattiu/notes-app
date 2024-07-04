/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import NoteList from "./NoteList"
import EditNote from "./EditNote"
import { Stack } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)
	const [notes, setNotes] = React.useState([]) //notes is an array of notes created
	const [editModal, setEditModal] = React.useState(false)
	const [isEditing, setIsEditing] = React.useState(false)
	const [currentNote, setCurrentNote] = React.useState({})

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		setNotes([...notes, newNote])
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	const editNote = (id, title, content) => {
		setEditModal(false)
		const editedNotes = notes.map((note) =>
			note.id === id ? { ...note, title: title, content: content } : note
		)
		setNotes(editedNotes)
	}

	const handleEdit = (note) => {
		setEditModal(true)
		setCurrentNote(note)
		setIsEditing(true)
	}
	const onHide = () => {
		setEditModal(false)
		setCurrentNote({})
		setIsEditing(false)
	}

	return (
		<>
			<Stack
				className="p-5 d-flex flex-column align-items-center justify-content-center"
				style={{ height: "100vh", margin: "0 auto" }}
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button mb-3 "
				>
					<Icon.PlusCircle
						size={250}
						color="#182b76"
					/>
				</button>

				<AddNote
					addNote={addNote}
					onHide={() => setModalShow(false)}
					show={modalShow}
				/>
				<EditNote
					show={editModal}
					editNote={editNote}
					notes={notes}
					isEditing={isEditing}
					currentNote={currentNote}
					onHide={onHide}
				/>
				<NoteList
					notes={notes}
					className="p-5"
					title="My Notes"
					deleteNote={deleteNote}
					editNote={editNote}
					handleEdit={handleEdit}
					onHide={onHide}
				/>
			</Stack>
		</>
	)
}

export default App
