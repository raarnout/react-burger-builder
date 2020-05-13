import React from 'react';
import Logo from 'components/logo';

import NavigationList from 'components/navigation/navigation-list';

const toolbar = props => (
	<header className="toolbar">
		<div>Menu</div>
		<Logo/>
		<NavigationList/>
	</header>
)

export default toolbar;