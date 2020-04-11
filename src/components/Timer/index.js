import React, { Component } from "react";
import PropTypes from "prop-types";

import { formatMS } from "../../utilities";
import "./index.css";

const TICK_INTERVAL = 1000;

export default class Timer extends Component {
	static propTypes = {
		// Length of timer in milliseconds
		lengthOfTimer: PropTypes.number.isRequired,

		// Event handler when timer is complete
		onComplete: PropTypes.func
	};

	constructor(props) {
		super(props);

		this.timerId = null;
		this.state = {
			timeElapsed: 0
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), TICK_INTERVAL);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		const { lengthOfTimer } = this.props;
		const newTimeElapsed = this.state.timeElapsed + TICK_INTERVAL;

		this.setState(
			{
				timeElapsed: newTimeElapsed
			},
			() => {
				if (lengthOfTimer - newTimeElapsed <= 0) {
					clearInterval(this.timerID);
					this.props.onComplete && this.props.onComplete();
				}
			}
		);
	}

	render() {
		const { lengthOfTimer } = this.props;
		const { timeElapsed } = this.state;
		const timeRemaining = formatMS(lengthOfTimer - timeElapsed);

		return <div className="timer">{timeRemaining}</div>;
	}
}
