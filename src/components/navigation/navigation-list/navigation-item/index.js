import React from 'react';

const navigationItem = props => (
	<li className="navigation-item">
		<a className={props.active ? 'active' : null} 
			href={props.link}>
				{props.children}
		</a>
	</li>
)

export default navigationItem;