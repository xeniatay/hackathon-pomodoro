import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Button extends Component {
	static defaultProps = {
		type: 'button'
	};

	static propTypes = {
		/* Event handler when start button is clicked */
		onClick: PropTypes.func,

		/* Button text */
		text: PropTypes.string,

		/* Button type */
		type: PropTypes.string
	};

	render() {
		const { onClick, text, type } = this.props;
		return (
			<button className="button" onClick={onClick} type={type}>
				{text}
			</button>
		);
	}
}
