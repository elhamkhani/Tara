import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartStore from '../../redux/CartStore';

const Header = () => {
	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		CartStore.subscribe(() => {
			const state = CartStore.getState();
			if (state) {
				const itemCount = state.cart
					.map((item) => item.quantity)
					.reduce((p, n) => p + n, 0);
				setItemCount(itemCount);
			}
		});
	}, []);
	return (
		<nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
			<div className="container-fluid">
				<NavLink to="/">Home</NavLink>
				{' | '}
				<NavLink to="/about">About</NavLink>
				{' | '}
				<NavLink to="/products">Products</NavLink>
				{' | '}
				<NavLink to="/cart" className="nav-link">
					<span className="bi bi-cart-plus-fill text-white font-xxlarge"></span>
					<span className="font-upper font-bold text-white ms-4">
						<span className="font-xxlarge align-middle">{itemCount}</span>
						<span className="align-middle ms-2">Tickets</span>
					</span>
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
