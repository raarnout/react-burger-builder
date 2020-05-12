import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
	/*
	 * define 'state' directy inside the class, so we don't need to use the 
	 * constructor function.
	 * As well we use arrow functions, to avoid problems with the 'this' keyword
	 */
	 
	state = {
		ingredients: {
			SALAD: 1,
			BACON: 1,
			CHEESE: 2,
			MEAT: 2
		}
	}

	render() {
		return (
			<Auxiliary>
				<Burger ingredients={this.state.ingredients} />
				<div>Build controls</div>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
