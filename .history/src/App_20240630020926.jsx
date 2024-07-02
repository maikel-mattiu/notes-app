/* eslint-disable no-unused-vars */
import React from "react"
import Button from "react-bootstrap/Button"
import AddNote from "./AddNote"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Button
				variant="outline-primary"
				onClick={() => setModalShow(true)}
				className=""
			>
				Create Note
			</Button>

			<AddNote
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	)
}

export default App
