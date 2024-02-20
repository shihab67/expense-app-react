import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import classes from "./AvailableMeals.module.css";
import { Meal } from "./Meal";

// const DUMMY_MEALS = [
// 	{
// 		id: "m1",
// 		name: "Sushi",
// 		description: "Finest fish and veggies",
// 		price: 22.99,
// 	},
// 	{
// 		id: "m2",
// 		name: "Schnitzel",
// 		description: "A german specialty!",
// 		price: 16.5,
// 	},
// 	{
// 		id: "m3",
// 		name: "Barbecue Burger",
// 		description: "American, raw, meaty",
// 		price: 12.99,
// 	},
// 	{
// 		id: "m4",
// 		name: "Green Bowl",
// 		description: "Healthy...and green...",
// 		price: 18.99,
// 	},
// ];

export const AvailableMeals = (props) => {
	const [mealsList, setMealsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const cartCtx = useContext(cartContext);
	const addItemToCartHandler = (amount, meal) => {
		cartCtx.addItem({
			id: meal.id,
			name: meal.name,
			amount: amount,
			price: meal.price,
		});
	};

	useEffect(() => {
		const fetchMeals = async () => {
			setIsLoading(true);
			const response = await fetch(
				"https://react-udemy-course-cb818-default-rtdb.firebaseio.com/meals.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();
			const loadedItems = [];

			for (const key in responseData) {
				loadedItems.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMealsList(loadedItems);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (httpError) {
		return (
			<>
				<p className="text-center text-danger">{httpError}</p>
			</>
		);
	}

	if (isLoading) {
		return (
			<>
				<p className="text-center text-primary">Loading...</p>
			</>
		);
	}

	const meals = mealsList.map((meal) => (
		<Meal onAddToCart={addItemToCartHandler} key={meal.id} meal={meal} />
	));

	return <section className={classes.meals}>{meals}</section>;
};
