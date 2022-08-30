import React, { useState } from "react";
import AddUSer from "./Components/Users/AddUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import UsersList from "./Components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (username, age) => {
		setUsersList(() => {
			return [...usersList, { username: username, age: age }];
		});
	};

	return (
		<>
			<div className="container mt-4">
				<AddUSer onAddUser={addUserHandler} />
				<UsersList users={usersList} />
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
