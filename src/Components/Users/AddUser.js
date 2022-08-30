import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddUser(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const addUserHandler = (e) => {
		e.preventDefault();

		if (username.trim().length === 0 || age.trim().length === 0) {
			toast.error("Username and age are required");
			return;
		}

		if (+age <= 0) {
			toast.error("Age must be grater than 0");
			return;
		}

		props.onAddUser(username, +age);

		setUsername("");
		setAge("");
	};

	const userNameChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	return (
		<div className="row mb-3">
			<div className="col-md-12">
				<div className="card">
					<div className="card-body">
						<form onSubmit={addUserHandler}>
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="username">Username</label>
									<input
										type="text"
										className="form-control"
										placeholder="Username"
										id="username"
										name="username"
										onChange={userNameChangeHandler}
										value={username}
									/>
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="age">Age</label>
									<input
										type="text"
										className="form-control"
										placeholder="Age"
										id="age"
										name="age"
										onChange={ageChangeHandler}
										value={age}
									/>
								</div>
								<div className="col-md-12 mb-3">
									<button
										type="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
