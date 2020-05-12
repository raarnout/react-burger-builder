import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const mainLayout = (props) => (
	<Auxiliary>
		<div>toolbar</div>
		<main className="main-layout">
			{props.children}
		</main>
	</Auxiliary>
)

export default mainLayout;