import React from 'react';

import NavigationItem from 'components/navigation/navigation-list/navigation-item';

const navigationItem = props => (
	<ul className="navigation-list">
		<NavigationItem link="/">Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
)

export default navigationItem;