/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import { Container, Row, Col } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Container
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button"
				>
					<Icon.Plus />
					Create Note
				</button>

				<AddNote
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</Container>
		</>
	)
}

export default App
