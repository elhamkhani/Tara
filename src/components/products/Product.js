import React from 'react';
import PropTypes from 'prop-types';
import CartStore from '../../redux/CartStore';
import * as types from '../../redux/actions/actionTypes';

export default function Product({ product }) {
	return (
		<div>
			<div>{product.name}</div>
			<div>{product.price}</div>
			<div>
				<img src={product.imgUrl} alet={product.name} />
			</div>
			<div>{product.quantity}</div>
			<div>
				{' '}
				<button
					type="button"
					className="btn btn-primary btn-primary-themed btn-md font-upper"
					onClick={() =>
						CartStore.dispatch({ type: types.ADD_TO_CART, payload: product })
					}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

Product.propTypes = {
	product: PropTypes.object.isRequired
};
