import React, { Component } from 'react';

import Backdrop from 'components/UI/backdrop';
import Auxiliary from 'hoc/auxiliary';

/* 
 * converted Modal to a class component, so we can use the shouldComponentUpdate
 * hook.
 */
class Modal extends Component {

	/* 
	 * Now we only update the component when the modal is visible.
	 * We could do this also with the useEffect() hook inside a function
	 * component. The disadvantage from using a function component with
	 * useEffect() is that it still wil update all de props.children.
	 * If we use the class based comopnent combined with shouldComponentUpdate()
	 * it also avoids rerendering all props.children. Thats why i choose to convert
	 * this modal to a class-component instead of function-component.
	 */
	shouldComponentUpdate(nextProps) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render() {
		return (
			<Auxiliary>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div className="modal" style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show ? '1' : '0'
				}}>{this.props.children}</div>
			</Auxiliary>
		)
	}
}

export default Modal;
