import React from 'react';
import Control from './control';

import {
	MEAT,
	CHEESE,
	SALAD,
	BACON
} from '02-const/burger'

const controls = [
	{ label: 'Salad', type: BACON },
	{ label: 'Bacon', type: SALAD },
	{ label: 'Cheese', type: CHEESE },
	{ label: 'Meat', type: MEAT }
]

const buildControls = props => (
	<div className="build-controls">
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<Control 
				key={ctrl.label} 
				label={ctrl.label}
				add={() => props.ingredientAdded(ctrl.type)}
				remove={() => props.ingredientRemoved(ctrl.type)}
				disableLessButton={props.disableControls[ctrl.type]} />
		))}
		<button 
			className="order-button"
			disabled={!props.purchasable} 
			onClick={props.ordered}>ORDER NOW</button>
	</div>
)

export default buildControls;
