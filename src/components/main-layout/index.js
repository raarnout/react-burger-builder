import React from 'react';

import Auxiliary from 'hoc/auxiliary';
import Toolbar from 'components/navigation/toolbar';

const mainLayout = props => (
	<Auxiliary>
		<Toolbar/>
		<main className="main-layout">
			{props.children}
		</main>
	</Auxiliary>
)

export default mainLayout;