import React from 'react';

import Backdrop from 'components/UI/backdrop';
import Auxiliary from 'hoc/auxiliary';

const modal = props => (
	<Auxiliary>
		<Backdrop show={props.show} clicked={props.modalClosed}/>
		<div className="modal" style={{
			transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
			opacity: props.show ? '1' : '0'
		}}>{props.children}</div>
	</Auxiliary>
)

export default modal;
