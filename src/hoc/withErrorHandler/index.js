import React, { Component } from 'react';

import Modal from 'components/UI/modal';
import Auxiliary from 'hoc/auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}

		/*
		 * In componentDidMount() we added some interceptors which is basically 
		 * some middleware that intercepts each request done via the give 
		 * axios instance.
		 * Each time we send a request, the error will be cleared.
		 * Each time we get a response, we will check if there is an error.
		 * If so, we show it in a modal.
		 */
		componentDidMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});

			axios.interceptors.response.use(res => res, error => {
				this.setState({ error });
			});
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null });
		}

		render() {
			return (
				<Auxiliary>
					<Modal
						show={this.state.error}
						modalClosed={this.errorConfirmedHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Auxiliary>
			);
		}
	}
}

export default withErrorHandler;