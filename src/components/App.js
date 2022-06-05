import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ProductsPage from './products/ProductsPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';

function App() {
	return (
		<div className="container-fluid">
			<Header></Header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
