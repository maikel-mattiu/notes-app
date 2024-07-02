/* eslint-disable no-unused-vars */
import React from "react"
import Button from "react-bootstrap/Button"
import AddNote from "./AddNote"
import { Container, Row, Col } from "react-bootstrap"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Container>
				<Button
					variant="outline-primary"
					onClick={() => setModalShow(true)}
					className="button"
				>
					Create Note
				</Button>

				<AddNote
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</Container>
		</>
	)
}

export default App
