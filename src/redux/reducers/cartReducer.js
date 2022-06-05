import * as types from '../actions/actionTypes';

export default function cartReducer(state = { cart: [] }, action) {
	let cart = state.cart;
	switch (action.type) {
		case types.ADD_TO_CART:
			if (cart.find((item) => item.id === action.payload.id)) {
				let newCart = cart.filter((item) => {
					if (item.id === action.payload.id) {
						item.quantity++;
					}
					return item;
				});
				return {
					...state,
					cart: newCart
				};
			} else {
				action.payload.quantity = 1;
				cart.push(action.payload);
				return {
					...state,
					cart: cart
				};
			}
		case types.REMOVE_FROM_CART:
			if (cart.find((item) => item.id === action.payload.id)) {
				let newCart = cart.filter((item) => item.id !== action.payload.id);
				return {
					...state,
					cart: newCart
				};
			} else {
				return {
					...state,
					cart: cart
				};
			}
		default:
			return {
				...state,
				cart: cart
			};
	}
}
