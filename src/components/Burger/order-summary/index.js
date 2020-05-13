import React from 'react';

import Auxiliary from 'hoc/auxiliary';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span>{igKey}</span>: {props.ingredients[igKey]}
				</li>
			)
		})

	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>Burger ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>continue checkout</p>
		</Auxiliary>
	)
}

export default orderSummary;