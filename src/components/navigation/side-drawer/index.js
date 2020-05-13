import React from 'react';

import Logo from 'components/logo';
import NavigationList from 'components/navigation/navigation-list';
import Backdrop from 'components/UI/backdrop';
import Auxiliary from 'hoc/auxiliary';

const sideDrawer = props => {
	let classes = ['side-drawer', 'close'];
	if (props.open) {
		classes = ['side-drawer', 'open'];
	}

	return (
		<Auxiliary>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={classes.join(" ")}>
				<div className="side-drawer__logo">
					<Logo />
				</div>
				<nav>
					<NavigationList />
				</nav>
			</div>
		</Auxiliary>
	)
}

export default sideDrawer;