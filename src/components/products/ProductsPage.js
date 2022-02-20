import React from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../redux/actions/productAction';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class ProductsPage extends React.Component {
	state = {
		product: {
			name: ''
		}
	};

	handleChange = (event) => {
		const product = { ...this.state.product, name: event.target.value };
		this.setState({ product });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.actions.createProduct(this.state.product);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>products</h2>
				<h3>Add product</h3>
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.product.name}
				></input>

				<input type="submit" value="Save"></input>
				{this.props.products.map((product) => (
					<div key={product.name}>{product.name}</div>
				))}
			</form>
		);
	}
}

ProductsPage.propTypes = {
	actions: PropTypes.object.isRequired,
	products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(productActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
