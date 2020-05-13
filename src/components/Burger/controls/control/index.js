import React from 'react';

const buildControl = props => {

	return (
		<div className="build-control">
			<div className="label">{props.label}</div>
			<button className="less">Less</button>
			<button className="more">More</button>
		</div>
	)
}

export default buildControl;
