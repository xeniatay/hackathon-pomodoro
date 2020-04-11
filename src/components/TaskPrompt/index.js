import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class TaskPrompt extends Component {
	static propTypes = {
		/* Event handler when task input triggers an onChange event */
		onTaskChange: PropTypes.func,

		/* Event handler when start button is clicked */
		onStart: PropTypes.func
	};

	handleOnChange = e => {
		this.props.onTaskChange && this.props.onTaskChange(e);
	};

	handleOnKeyPress = e => {
		// Trigger start event when enter key is pressed
		if (e.key === "Enter") {
			this.props.onStart && this.props.onStart(e);
		}
	};

	render() {
		return (
			<div className="task-prompt">
				<div className="prompt">
					<p className="heading">What are you working on?</p>
					<textarea
						className="task-input"
						name="task"
						rows="1"
						maxLength="64"
						onChange={this.handleOnChange}
						onKeyPress={this.handleOnKeyPress}
						placeholder="Big things!"
					/>
				</div>
				<button className="button start" onClick={this.props.onStart}>
					Start
				</button>
			</div>
		);
	}
}
