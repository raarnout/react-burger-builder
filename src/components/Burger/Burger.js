import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {
	BREAD_BOTTOM,
	BREAD_TOP,
	MEAT,
	CHEESE
} from '../../02-const/burger'

const burger = props => {
	 return (
		<div className="burger">
			<BurgerIngredient type={BREAD_TOP}/>
			<BurgerIngredient type={CHEESE}/>
			<BurgerIngredient type={MEAT}/>
			<BurgerIngredient type={BREAD_BOTTOM}/>
		</div>
	)
}

export default burger;