import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameisValid, setEnteredNameisValid] = useState(true);
	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === "") {
			setEnteredNameisValid(true);
			return;
		}

		setEnteredName(true);
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" onChange={nameChangeHandler} />

				{!enteredNameisValid && (
					<span className="error-text">Name field is required!</span>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
