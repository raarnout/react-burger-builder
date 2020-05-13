import React, { Component } from 'react';

import Auxiliary from 'hoc/auxiliary';
import Burger from 'components/burger';
import Controls from 'components/burger/controls';

import { INGREDIENT_PRICE } from '02-const/burger';

const calculateIngredientCount = (oldCount, addition) => {
	let updatedCount = oldCount + addition;
	if (updatedCount <= 0) {
		return 0;
	}
	return updatedCount;
}

const updateIngredientCount = (oldIngredients, type, newCount) => {
	const ingredients = {
		...oldIngredients
	}
	ingredients[type] = newCount;
	return ingredients;
}

const updateTotalPrice = (oldPrice, type, add) => {
	const ingredientPrice = INGREDIENT_PRICE[type];
	if (add) {
		return oldPrice + ingredientPrice;
	} 
	return oldPrice - ingredientPrice;
}

/*
 * use normal function defenition, so we can reach the correct context inside
 * the 'this' keyword.
 */
const updateIngredient = function (type, addition) {
	const newCount = calculateIngredientCount(this.state.ingredients[type], addition)
	const ingredients = updateIngredientCount(this.state.ingredients, type, newCount);
	const totalPrice = updateTotalPrice(this.state.totalPrice, type, addition > 0)

	this.setState({ totalPrice, ingredients });
}

class BurgerBuilder extends Component {
	/*
	 * define 'state' directy inside the class, so we don't need to use the 
	 * constructor function.
	 */
	state = {
		ingredients: {
			SALAD: 0,
			BACON: 0,
			CHEESE: 0,
			MEAT: 0
		},
		totalPrice: 4
	}

	addIngredientHandler = type => {
		updateIngredient.call(this, type, 1);
	}

	removeIngredientHandler = type => {
		updateIngredient.call(this, type, -1);
	}

	calculateDisableControls = () => {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return disabledInfo;
	}

	calculatePurchase = () => {
		const ingredients = { ...this.state.ingredients };
		const totalIngredients = Object.keys(ingredients).map(igKey => {
			return ingredients[igKey];
		}).reduce((sum, el) => {
			return sum + el;
		}, 0);
		return totalIngredients > 0;
	}

	render() {
		return (
			<Auxiliary>
				<Burger ingredients={this.state.ingredients} />
				<Controls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disableControls={this.calculateDisableControls()}
					price={this.state.totalPrice}
					purchasable={this.calculatePurchase()}
				/>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
