import React from 'react';
import Logo from 'components/logo';

import NavigationList from 'components/navigation/navigation-list';
import HamburgerButton from 'components/UI/hamburger-button';

const toolbar = props => (
	<header className="toolbar">
		<HamburgerButton clicked={props.toggleMenu}/>
		<div className="toolbar__logo">
			<Logo />
		</div>
		<nav className="desktop-only">
			<NavigationList/>
		</nav>
	</header>
)

export default toolbar;