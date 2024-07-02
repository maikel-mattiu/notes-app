/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import { Container, Row, Col } from "react-bootstrap"
import "./App.css"
import feather from "feather-icons"

function App() {
	const [modalShow, setModalShow] = React.useState(false)
	const plusIcon = feather.icons["plus-circle"]

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
					{plusIcon}
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
