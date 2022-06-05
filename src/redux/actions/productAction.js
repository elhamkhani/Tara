import * as types from './actionTypes';

export function addProductToCart(product) {
	return { type: types.ADD_TO_CART, product };
}

export function removeProductFromCart(product) {
	return { type: types.REMOVE_FROM_CART, product };
}
