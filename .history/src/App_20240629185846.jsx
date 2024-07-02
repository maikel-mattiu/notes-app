/* eslint-disable no-unused-vars */
import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	return (
		<>
			<Button
				variant="primary"
				onClick={() => setModalShow(true)}
			>
				Launch vertically centered modal
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	)
}

export default App
