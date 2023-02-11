import React from "react";
import { AvailableMeals } from "./AvailableMeals";
import { MealsSummary } from "./MealsSummary";

export const Meals = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<MealsSummary />
			<AvailableMeals />
		</div>
	);
};
