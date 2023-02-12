import React, { useRef, useState } from "react";
import { Input } from "../UI/Input";

export const Meal = (props) => {
	const [amountIsvalid, setAmountIsvalid] = useState(true);
	const amountInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();

		const amount = amountInputRef.current.value;
		const amountNumber = +amount;

		if (amountNumber.length === 0 || amountNumber < 0 || amountNumber > 5) {
			setAmountIsvalid(false);
			return;
		}

		props.onAddToCart(amount, props.meal);
	};

	return (
		<div className="card mt-2" key={props.meal.id}>
			<div className="card-body">
				<div className="row d-flex justify-content-between align-items-center">
					<div className="col-md-6">
						<h5 className="card-title">{props.meal.name}</h5>
						<p className="card-text">{props.meal.description}</p>
						<p className="card-text">${props.meal.price}</p>
					</div>

					<div className="col-md-6 text-end w-25">
						<form onSubmit={submitHandler}>
							<Input
								ref={amountInputRef}
								label="Amount"
								input={{
									id: "amount_" + props.meal.id,
									type: "number",
									min: "1",
									max: "5",
									step: "1",
									defaultValue: "1",
									className: "form-control",
								}}
							/>
							<button className="btn btn-success">
								<i className="fas fa-plus mx-1"></i>Add to Cart
							</button>
							{!amountIsvalid && (
								<span className="text-danger">
									Please Enter a valid amount!
								</span>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
