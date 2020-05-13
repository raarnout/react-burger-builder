import React from 'react';

const hamburgerButton = props => (
	<button type="button" 
			className="hamburger-button hamburger hamburger--vortex mobile-only" 
			onClick={props.clicked}>
		<span className="hamburger-box">
			<span className="hamburger-inner"></span>
		</span>
	</button>
)

export default hamburgerButton;
