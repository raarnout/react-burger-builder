import React from 'react';

const buildControl = props => {

	return (
		<div className="build-control">
			<div className="label">{props.label}</div>
			<button className="less" onClick={props.remove} disabled={props.disableLessButton}>Less</button>
			<button className="more" onClick={props.add}>More</button>
		</div>
	)
}

export default buildControl;
