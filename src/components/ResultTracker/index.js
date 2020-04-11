import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

import Timer from "../Timer";
import GiphyComponent from "../GiphyComponent";

class ResultPrompt extends Component {
	static propTypes = {
		/* Event handler when break is completed */
		onComplete: PropTypes.func
	};

	handleOnChange = e => {
		this.props.onTaskResultChange && this.props.onTaskResultChange(e);
	};

	render() {
		return (
			<div className="result-tracker">
				<p className="heading">How did your task go?</p>
				<div className="button-wrapper">
					<button
						type="button"
						className="button success"
						onClick={() => this.props.setStatus("SUCCESS")}
					>
						Great
					</button>
					<button
						type="button"
						className="button error"
						onClick={() => this.props.setStatus("FAILURE")}
					>
						Badly
					</button>
				</div>
				<textarea
					className="result-input"
					name="result"
					rows="5"
					maxLength="48"
					onChange={this.handleOnChange}
					placeholder="Tell us how you really feel"
				/>
			</div>
		);
	}
}

class Result extends React.Component {
	constructor() {
		super();
		this.state = {
			status: "WAITING"
		};
	}

	setStatus = status => {
		this.setState({ ...this.state, status });
	};

	render() {
		let component = <div />;
		switch (this.state.status) {
			case "SUCCESS":
				component = <GiphyComponent isEpic={this.props.streakCount >= this.props.streakGoal} success={true} />;
				break;
			case "FAILURE":
				component = <GiphyComponent success={false} />;
				break;
			default:
				component = (
					<ResultPrompt
						setStatus={this.setStatus}
						onTaskResultChange={this.props.onTaskResultChange}
					/>
				);
		}

		return (
			<div className="result-tracker">
				<p className="heading">Break time</p>
				<Timer lengthOfTimer={this.props.breakSeconds * 1000} onComplete={this.props.onComplete} />
				{component}
			</div>
		);
	}
}

export default Result;
