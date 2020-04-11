import React, { Component } from "react";
import "./App.css";

import StreakCounter from "./components/StreakCounter";
import TaskPrompt from "./components/TaskPrompt";
import WorkTimer from "./components/WorkTimer";
import ResultTracker from "./components/ResultTracker";
import ActivityFeed from "./components/ActivityFeed";
import {
	addTaskToSavedHistory,
	getSavedHistory,
	addSettingsToStorage,
	getSettingsFromStorage
} from "./utilities";
import SettingsForm from "./components/SettingsForm";

const STATUS = { PROMPT: "prompt", WORK: "work", BREAK: "break" };

export default class App extends Component {
	constructor(props) {
		super(props);

		const taskHistory = getSavedHistory();
		const settings = getSettingsFromStorage();

		this.state = {
			settings,
			status: STATUS.PROMPT,
			task: {
				startedTime: null,
				description: "",
				completed: null,
				result: "-"
			},
			taskHistory
		};
	}

	onStart = e => {
		this.setState({
			status: STATUS.WORK,
			task: { ...this.state.task, startedTime: new Date().toISOString() }
		});
	};

	onTaskChange = e => {
		this.setState({
			task: { ...this.state.task, description: e.target.value }
		});
	};

	handleComplete = () => {
		this.setState(state => {
			const updatedTask = {
				...state.task
			};
			addTaskToSavedHistory(updatedTask);
			const taskHistory = [...state.taskHistory, updatedTask];
			return {
				status: STATUS.PROMPT,
				task: {
					startedTime: null,
					description: "",
					completed: null,
					result: "-"
				},
				taskHistory
			};
		});
	};

	onTaskResultChange = e => {
		const updatedTask = {
			...this.state.task,
			result: e.target.value
		};

		this.setState({
			task: updatedTask
		});
	};

	handleSettingsSubmit = settings => {
		console.log("settings", settings);
		addSettingsToStorage(settings);
		this.setState({ settings });
	};

	getStreak = () => {
		let streak = 0;

		this.state.taskHistory
			.sort((a, b) => a.startedTime.localeCompare(b.startedTime))
			.reverse()
			.find(h => {
				if (h.completed) {
					streak += 1;
				}

				return h.completed !== true;
			});

		return streak;
	};

	render() {
		const { settings, status, task, taskHistory } = this.state;
		const { breakSeconds, taskSeconds, streakGoal } = settings;
		let content;

		switch (status) {
			case STATUS.WORK:
				content = (
					<WorkTimer
						task={task}
						taskHistory={taskHistory}
						taskSeconds={taskSeconds}
						onAbort={() => this.setState({ status: STATUS.BREAK, task: { ...task, completed: false } })}
						onComplete={() => this.setState({ status: STATUS.BREAK, task: { ...task, completed: true } })}
					/>
				);
				break;
			case STATUS.PROMPT:
				content = (
					<>
						<TaskPrompt onTaskChange={this.onTaskChange} onStart={this.onStart} />
						<SettingsForm
							breakSeconds={breakSeconds}
							taskSeconds={taskSeconds}
							streakGoal={streakGoal}
							onSubmit={this.handleSettingsSubmit}
						/>
					</>
				);
				break;
			case STATUS.BREAK:
				content = (
					<ResultTracker
						breakSeconds={breakSeconds}
						onTaskResultChange={this.onTaskResultChange}
						onComplete={this.handleComplete}
						streakCount={this.getStreak()}
						streakGoal={streakGoal}
					/>
				);
				break;
			default:
				break;
		}

		return (
			<div className="App">
				<header className="header">
					<div className="title">Po-po-po-pomodoro</div>
					{/* <Badge text={status === STATUS.BREAK ? "break" : "work"} /> */}
					<StreakCounter streakCount={this.getStreak()} />
				</header>
				<div className="wrapper">
					<div className="content">
						<>{content}</>
					</div>
					<div className="feed">
						<ActivityFeed
							currentTask={task.startedTime ? task : null}
							history={taskHistory}
						/>
					</div>
				</div>
			</div>
		);
	}
}
