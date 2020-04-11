import React, { Component } from "react";
import PropTypes from "prop-types";
import Timer from "../Timer";

import "./index.css";

export default class WorkTimer extends Component {
	static propTypes = {
		/* Task that is being worked on */
		task: PropTypes.shape({
			description: PropTypes.string.isRequired
		}),

		taskHistory: PropTypes.array,

		taskSeconds: PropTypes.number.isRequired,

		/* Event handler when pomodoro is aborted */
		onAbort: PropTypes.func,

		/* Event handler when pomodoro is completed */
		onComplete: PropTypes.func
	};

	handleStop = e => {
		if (
			window.confirm("Are you sure you want to stop? This will break your Pomodoro streak!")
		) {
			this.props.onAbort && this.props.onAbort();
		}
	};

	render() {
		const {
			task: { description: taskDescription },
			taskHistory,
			taskSeconds
		} = this.props;

		return (
			<div className="work-timer">
				<p className="heading">{`${taskDescription || "Anonymous Task"}`}</p>
				<Timer lengthOfTimer={taskSeconds * 1000} onComplete={this.props.onComplete} />
				<button className="button error" onClick={this.handleStop}>
					Stop
				</button>
			</div>
		);
	}
}
