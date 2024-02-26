import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalAmount: 0,
		totalQuantity: 0,
	},
	reducers: {
		replaceCart(state, actions) {
			state.totalQuantity = actions.payload.totalQuantity;
			state.items = actions.payload.items;
		},
		addItemToCart(state, actions) {
			const newItem = actions.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice += newItem.price;
			}

			state.totalQuantity++;
			state.totalAmount += newItem.price;
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			}

			state.totalQuantity--;
			state.totalAmount -= existingItem.price;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
