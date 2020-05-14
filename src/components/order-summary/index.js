import React from 'react';

import Auxiliary from 'hoc/auxiliary';
import Button from 'components/UI/button';

const OrderSummary = props => {
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
			<p><strong>Total Price: {props.price.toFixed(2)} </strong></p>
			<Button btnType='danger' clicked={props.cancel}>Cancel</Button>
			<Button btnType='success' clicked={props.confirm}>Continue</Button>
		</Auxiliary>
	)
}

export default OrderSummary;
