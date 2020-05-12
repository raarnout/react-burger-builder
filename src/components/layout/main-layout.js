import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const mainLayout = (props) => (
	<Auxiliary>
		<main>
			{props.children}
		</main>
	</Auxiliary>
)

export default mainLayout;