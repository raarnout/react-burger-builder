import React from 'react';

import BurgerIngredient from './ingredient';
import {
	BREAD_BOTTOM,
	BREAD_TOP
} from '02-const/burger'

const burger = props => {
	let ingredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if(ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients!</p>
	}

	return (
		<div className="burger">
			<BurgerIngredient type={BREAD_TOP} />
			{ingredients}
			<BurgerIngredient type={BREAD_BOTTOM} />
		</div>
	)
}

export default burger;