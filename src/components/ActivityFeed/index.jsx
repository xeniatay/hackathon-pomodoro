// task
import React from "react";
import moment from "moment";
import "./index.css";
import PropTypes from "prop-types";

const TICK_INTERVAL = 5 * 1000;

class TimeSinceStart extends React.Component {
	static propTypes = {
		timeStarted: PropTypes.string.isRequired
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
		const timeSince = moment(this.props.timeStarted).fromNow();

		this.setState({
			timeSince
		});
	}

	render() {
		const { timeSince } = this.state;
		return <>{timeSince || "Just started"}</>;
	}
}

const TaskStatus = ({ completed }) => {
	if (completed === null) {
		return <>⏳</>;
	}
	return <>{completed ? "✅" : "⭕️"}</>;
};

const Task = ({ task, current = false, index }) => {
	return (
		<div className={`task-cell ${current && "current-task-cell"}`}>
			<p className="task-name">
				{task.description || "Anonymous Task"}{" "}
				<span className="task-status">
					<TaskStatus completed={task.completed} />
				</span>
			</p>
			<p>
				<span>🕒</span>{" "}
				{current
					? task.startedTime && <TimeSinceStart timeStarted={task.startedTime} />
					: moment(task.startedTime).format("LT")}
			</p>
			<p>
				<span>📝</span> {task.result}
			</p>
		</div>
	);
};

const ActivityFeed = ({ currentTask, history = [] }) => {
	let sortedHistory = history
		.sort((a, b) => !a.startedTime.localeCompare(b.startedTime))
		.map((task, i) => <Task task={task} key={i} index={i} />);

	return (
		<div className="activity-feed">
			<p className="heading">Task History</p>
			{currentTask && <Task current={true} task={currentTask} index={history.length} />}
			{sortedHistory.length ? (
				sortedHistory
			) : (
				<div className="empty-state">No completed tasks in the list.</div>
			)}
		</div>
	);
};

export default ActivityFeed;
