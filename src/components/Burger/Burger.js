import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {
	BREAD_BOTTOM,
	BREAD_TOP
} from '../../02-const/burger'

const burger = props => {
	const ingredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			});
		});
	

	return (
		<div className="burger">
			<BurgerIngredient type={BREAD_TOP}/>
			{ingredients}
			<BurgerIngredient type={BREAD_BOTTOM}/>
		</div>
	)
}

export default burger;