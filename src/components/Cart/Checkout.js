import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
	.object()
	.shape({
		name: yup.string().required(),
		email: yup.string().email("Enter a valid email").required(),
		phone: yup.number().required(),
	})
	.required();

function Checkout(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		const response = await fetch(
			"https://react-udemy-course-cb818-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify({
					user: data,
					items: props.cartItems,
				}),
			}
		);
		setIsSubmitting(false);
	};

	// const handleFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	const formData = new FormData(document.forms.form);
	// 	// console.log(Object.fromEntries(formData.entries()));
	// 	// console.log(...formData);
	// };

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)} id="form">
				<div className="row">
					<div className="col-md-12 mb-3">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								className="form-control"
								placeholder="Enter Name"
								{...register("name")}
							/>

							<span className="text-danger">
								{errors.name?.message}
							</span>
						</div>
					</div>

					<div className="col-md-12 mb-3">
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter Email"
								{...register("email")}
							/>

							<span className="text-danger">
								{errors.email?.message}
							</span>
						</div>
					</div>

					<div className="col-md-12 mb-3">
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter Phone"
								{...register("phone")}
							/>

							<span className="text-danger">
								{errors.phone?.message}
							</span>
						</div>
					</div>

					<div className="col-md-12 mb-3">
						<button
							type="button"
							className="btn btn-danger btn-sm mx-2"
							onClick={props.onCancel}
						>
							Cancel
						</button>

						<button
							type="submit"
							className="btn btn-primary btn-sm"
						>
							Checkout
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Checkout;
