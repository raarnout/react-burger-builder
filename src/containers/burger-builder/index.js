import React, { Component } from 'react';

import Auxiliary from 'hoc/auxiliary';
import Burger from 'components/burger';
import Controls from 'components/burger/controls';
import Modal from 'components/UI/modal';
import OrderSummary from 'components/order-summary/';
import Spinner from 'components/UI/spinner';

import withErrorHandler from 'hoc/withErrorHandler';
import axios from '01-helper/utilities/ajax/orders';
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
		ingredients: [],
		totalPrice: DEFAULT_PRICE,
		purchasing: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		axios.get('https://react-burger-builder-40ebc.firebaseio.com/ingredients.json')
			.then(response => {
				const data = response.data;
				const ingredients = Object.keys(data).map(igKey => {
					return {
						[igKey.toUpperCase()]: data[igKey]
					};
				}).reduce((ingredients, pair) => {
					return { ...ingredients, ...pair }
				}, {});

				this.setState({ ingredients: { ...ingredients } });
			})
			.catch(error => {
				this.setState({ error: true });
			});
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
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Ronald',
				address: {
					street: 'Teststraat 1',
					zipCode: '1234 ab',
					country: 'Nederland'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then(response => {
				console.log(response);
				this.setState({ loading: false, purchasing: false });
			})
			.catch(error => {
				console.log(error);
				this.setState({ loading: false, purchasing: false });
			});
	}

	render() {
		let orderSummary = null;
		let burger = <Spinner />;
		if (this.state.ingredients) {
			burger = (
				<Auxiliary>
					<Burger ingredients={this.state.ingredients} />
					<Controls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disableControls={this.calculateDisableControls()}
						price={this.state.totalPrice}
						purchasable={this.calculatePurchase}
						ordered={() => this.purchasingHandler(true)} />
				</Auxiliary>
			);

			orderSummary = <OrderSummary
				ingredients={this.state.ingredients}
				price={this.state.totalPrice}
				cancel={() => this.purchasingHandler(false)}
				confirm={() => this.purchasingConfirmed()} />;
		}


		if (this.state.loading) {
			orderSummary = <Spinner />
		}

		if (this.state.error) {
			burger = <p style={{ textAlign: "center", padding: "100px" }}>Error loading ingredients from database</p>
		}

		return (
			<Auxiliary>
				<Modal
					show={this.state.purchasing}
					modalClosed={() => this.purchasingHandler(false)}>
					{orderSummary}
				</Modal>
				{burger}
			</Auxiliary>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
