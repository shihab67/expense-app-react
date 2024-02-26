import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalAmount: 0,
		totalQuantity: 0,
	},
	reducers: {
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

export const sendCartdata = (cartData) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "sending...",
				message: "sending cart data...",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-udemy-course-cb818-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cartData),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed!");
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success",
					message: "Sent cart data successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}

		dispatch(
			uiActions.showNotification({
				status: "success",
				title: "Success",
				message: "Sent cart data successfully!",
			})
		);
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
