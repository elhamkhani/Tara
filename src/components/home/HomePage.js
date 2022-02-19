import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className="jumbotron">
		<h1>Tara</h1>
		<p>Find your style</p>
		<Link to="about" className="btn btn-primary btn-lg">
			Learn more
		</Link>
	</div>
);

export default HomePage;
