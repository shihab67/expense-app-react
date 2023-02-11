import React from "react";
import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = () => {
	return (
		<>
			<button className={classes.button}>
				<span className={classes.icon}>
					<i class="fas fa-cart-plus"></i>
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>0</span>
			</button>
		</>
	);
};
