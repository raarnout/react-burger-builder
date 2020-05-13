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
		{controls.map(ctrl => (
			<Control 
				key={ctrl.label} 
				label={ctrl.label}
				add={() => props.ingredientAdded(ctrl.type)}
				remove={() => props.ingredientRemoved(ctrl.type)}
				disableLessButton={props.disableControls[ctrl.type]} />
		))}
	</div>
)


export default buildControls;