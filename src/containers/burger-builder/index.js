import React, { Component } from 'react';

import Auxiliary from 'hoc/auxiliary';
import Burger from 'components/burger';
import Controls from 'components/burger/controls';
import Modal from 'components/UI/modal';

import OrderSummary from 'components/order-summary/';

import { DEFAULT_PRICE, INGREDIENT_PRICE } from '02-const/burger';

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
	let newPrice = oldPrice + ingredientPrice;
	if (!add) {
		newPrice = oldPrice - ingredientPrice;
	};

	return newPrice;
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
			SALAD: 1,
			BACON: 1,
			CHEESE: 1,
			MEAT: 1
		},
		totalPrice: DEFAULT_PRICE,
		purchasing: false
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

	purchasingHandler = purchasing => {
		this.setState({ purchasing });
	}

	purchasingConfirmed = () => {
		alert('order confirmed');
	}

	render() {
		return (
			<Auxiliary>
				<Modal 
					show={this.state.purchasing}
					modalClosed={() => this.purchasingHandler(false)}>
					<OrderSummary 
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						cancel={() => this.purchasingHandler(false)}
						confirm={() => this.purchasingConfirmed()}/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<Controls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disableControls={this.calculateDisableControls()}
					price={this.state.totalPrice}
					purchasable={this.calculatePurchase}
					ordered={() => this.purchasingHandler(true)}/>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
