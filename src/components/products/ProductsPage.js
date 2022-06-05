import React from 'react';
import Product from './Product';

export default function ProductsPage() {
	const products = [
		{
			id: 1,
			name: 'Talk Docker to Me Tour',
			price: 49.99,
			imgUrl: 'logos/Container-Enthusiasm-TalkDocker-To-Me.png',
			quantity: 3
		},
		{
			id: 2,
			name: 'Binary Bovine Tour',
			price: 59.99,
			imgUrl: 'logos/DigitalCowboys_BinaryBovine.png',
			quantity: 4
		},
		{
			id: 3,
			name: 'Code Empire Tour',
			price: 39.99,
			imgUrl: 'logos/GitOuttaMyHub-CodeEmpire.png',
			quantity: 8
		},
		{
			id: 4,
			name: 'For Those About to Block Tour',
			price: 69.99,
			imgUrl:
				'logos/Network-Firewall-Squad---For-Those-About-to-Block,-We-Salute-You.png',
			quantity: 1
		}
	];
	return (
		<div>
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
}

ProductsPage.propTypes = {};
