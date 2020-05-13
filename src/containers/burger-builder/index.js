import React, { Component } from 'react';

import Auxiliary from 'hoc/auxiliary';
import Burger from 'components/burger';
import Controls from 'components/burger/controls';

class BurgerBuilder extends Component {
	/*
	 * define 'state' directy inside the class, so we don't need to use the 
	 * constructor function.
	 * As well we use arrow functions, to avoid problems with the 'this' keyword
	 */
	 
	state = {
		ingredients: {
			SALAD: 0,
			BACON: 0,
			CHEESE: 0,
			MEAT: 1
		}
	}

	render() {
		return (
			<Auxiliary>
				<Burger ingredients={this.state.ingredients} />
				<Controls />
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
