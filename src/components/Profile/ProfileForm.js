import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
	const passwordInputRef = useRef();
	const authCtx = useContext(AuthContext);
	const history = useHistory();

	const submitFormHandler = (event) => {
		event.preventDefault();

		const password = passwordInputRef.current.value;

		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNAeuyayYTAnKvNrMxsMeHat--jzsEHKA",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: password,
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => {
			history.replace("/");
		});
	};

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					ref={passwordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
