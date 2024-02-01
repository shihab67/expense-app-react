import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state, action) => {
	let items = state.items;

	if (action.type === "ADD") {
		if (items.length === 0) {
			items = state.items.concat(action.item);
		} else {
			const itemIndex = items.findIndex(
				(item) => item.id === action.item.id
			);
			if (itemIndex >= 0) {
				items[itemIndex].amount =
					Number(items[itemIndex].amount) +
					Number(action.item.amount);
			} else {
				items = state.items.concat(action.item);
			}
		}

		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		return { 
			items: items,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE") {
		const itemIndex = items.findIndex((item) => item.id === action.id);
		const item = items[itemIndex];
		const updatedTotalAmount = state.totalAmount - item.price * item.amount;
		items.splice(itemIndex, 1);
		return {
			items: items,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

export const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
