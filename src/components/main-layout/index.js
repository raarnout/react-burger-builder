import React, { useState } from 'react';

import Auxiliary from 'hoc/auxiliary';
import Toolbar from 'components/navigation/toolbar';
import SideDrawer from 'components/navigation/side-drawer';

function MainLayout(props) {
	const [showSideDrawer, setSideDrawer] = useState(false);

	const sideDrawerClosedHandler  = () => {
		setSideDrawer(!showSideDrawer);
	}

	const toggleMenuHandler = () => {
		setSideDrawer(!showSideDrawer);
	}

	return (
		<Auxiliary>
			<Toolbar 
				toggleMenu={toggleMenuHandler}/>
			<SideDrawer 
				open={showSideDrawer} 
				closed={sideDrawerClosedHandler}/>
			<main className="main-layout">
				{props.children}
			</main>
		</Auxiliary>
	)
}

export default MainLayout;
