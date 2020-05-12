import React from 'react';
import PropTypes from 'prop-types';

import {
	BREAD_BOTTOM,
	BREAD_TOP,
	MEAT,
	CHEESE,
	SALAD,
	BACON
} from '../../../02-const/burger'

const getIngredient = classname => <div className={classname}></div>;

const burgerIngredient = props => {
	switch (props.type) {
		case (BREAD_TOP):
			return (
				<div className="bread-top">
					<div className="seeds-1"></div>
					<div className="seeds-2"></div>
				</div>
			)
		case (BREAD_BOTTOM):
			return getIngredient('bread-bottom');
		case (MEAT):
			return getIngredient('meat');
		case (CHEESE):
			return getIngredient('cheese');
		case (SALAD):
			return getIngredient('salad');
		case (BACON):
			return getIngredient('bacon');
		default:
			return null;
	}
}

burgerIngredient.prototype = {
	type: PropTypes.string.isRequired
}

export default burgerIngredient;
