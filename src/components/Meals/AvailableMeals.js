import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import classes from "./AvailableMeals.module.css";
import { Meal } from "./Meal";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
];

export const AvailableMeals = (props) => {
	const cartCtx = useContext(cartContext);
	const addItemToCartHandler = (amount, meal) => {
		cartCtx.addItem({
			id: meal.id,
			name: meal.name,
			amount: amount,
			price: meal.price,
		});
	};

	const meals = DUMMY_MEALS.map((meal) => (
		<Meal onAddToCart={addItemToCartHandler} key={meal.id} meal={meal} />
	));

	return <section className={classes.meals}>{meals}</section>;
};
