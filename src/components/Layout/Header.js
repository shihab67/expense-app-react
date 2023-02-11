import React from "react";
import banner from "../../assets/images/banner.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = () => {
	return (
		<>
			<nav class="navbar navbar-dark bg-dark">
				<div class="container-fluid">
					<span class="navbar-brand">Food Ordering App</span>
					<HeaderCartButton />
				</div>
			</nav>
			<div className={classes["main-image"]}>
				<img src={banner} alt="Banner" />
			</div>
		</>
	);
};
