import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import ReactDOM from "react-dom";
import { CartItem } from "../Cart/CartItem";

export const HeaderCartButton = () => {
	const cartCtx = useContext(CartContext);
	const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return (curNumber += +item.amount);
	}, 0);

	const cartItems = cartCtx.items.map((item) => (
		<CartItem key={item.id} item={item} onRemove={cartCtx.removeItem} />
	));
	return (
		<>
			<button
				className={classes.button}
				data-bs-toggle="modal"
				data-bs-target="#cartModal"
			>
				<span className={classes.icon}>
					<i className="fas fa-cart-plus"></i>
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{numOfCartItems}</span>
			</button>

			{/* Cart modal */}
			{ReactDOM.createPortal(
				<div
					className="modal fade"
					id="cartModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLabel"
								>
									Your Cart
								</h5>
								<i
									className="fa fa-times close text-danger"
									data-bs-dismiss="modal"
									aria-label="Close"
								></i>
							</div>
							<div className="modal-body">
								{cartItems}
								<div className="d-flex justify-content-between mb-3">
									<span className="h5">Total Amount: </span>
									<span className="ms-2 h5">
										${cartCtx.totalAmount.toFixed(2)}
									</span>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary btn-sm"
									data-bs-dismiss="modal"
								>
									Close
								</button>

								{cartCtx.items.length > 0 && (
									<button className="btn btn-success btn-sm">
										Order
									</button>
								)}
							</div>
						</div>
					</div>
				</div>,
				document.getElementById("modal-root")
			)}
		</>
	);
};
