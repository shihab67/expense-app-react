import React from "react";
import classes from "./CartItem.module.css";
export const CartItem = (props) => {
	const handleRemoveItemFromCart = () => {
		props.onRemove(props.item.id);
	};

	return (
		<div className="card mb-2">
			<div className="card-body">
				<i
					className={`fas fa-times text-danger ${classes.removeBtn}`}
					onClick={handleRemoveItemFromCart}
				></i>

				<div className="d-flex justify-content-between align-items-center">
					<span>{props.item.name}</span>
					<span>
						{props.item.amount} x {props.item.price}
					</span>
				</div>
			</div>
		</div>
	);
};
