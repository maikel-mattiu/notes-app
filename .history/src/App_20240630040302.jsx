/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import { Container } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Container
				className="d-flex justify-content-center align-items-center flex-column"
				style={{ height: "100vh" }}
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button"
				>
					<Icon.PlusCircle size={24} />
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
