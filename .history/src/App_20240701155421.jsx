/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import NoteList from "./NoteList"
import { Stack } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)
	const [notes, setNotes] = React.useState([])

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		setNotes([...notes, newNote])
	}

	return (
		<>
			<Stack
				className="p-5"
				style={{ height: "100vh", margin: "0 auto" }}
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button mb-3 "
				>
					<Icon.PlusCircle size={24} /> Create Note
				</button>

				<AddNote
					show={modalShow}
					onHide={() => setModalShow(false)}
					addNote={addNote}
				/>
				<NoteList
					notes={notes}
					className="p-5"
					title="My Notes"
				/>
			</Stack>
		</>
	)
}

export default App
