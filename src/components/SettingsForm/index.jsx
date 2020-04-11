import React, { useCallback, useEffect, useState } from "react";
import TextInput from "../TextInput";
import "./index.css";

const SettingsForm = props => {
	const { onSubmit } = props;
	const [breakSeconds, setBreakSeconds] = useState(props.breakSeconds);
	const [taskSeconds, setTaskSeconds] = useState(props.taskSeconds);
	const [streakGoal, setStreakGoal] = useState(props.streakGoal);

	const handleSubmit = useEffect(() => {
		onSubmit({
			breakSeconds: breakSeconds ? parseInt(breakSeconds) : props.breakSeconds,
			taskSeconds: taskSeconds ? parseInt(taskSeconds) : props.taskSeconds,
			streakGoal: streakGoal ? parseInt(streakGoal) : props.streakGoal
		});
	}, [breakSeconds, taskSeconds, streakGoal, onSubmit]);

	const handleBlur = e => {
		if (!breakSeconds) {
			setBreakSeconds(props.breakSeconds);
		}

		if (!taskSeconds) {
			setTaskSeconds(props.taskSeconds);
		}

		if (!streakGoal) {
			setStreakGoal(props.streakGoal);
		}
	};

	return (
		<div className="settings">
			<p className="heading">Settings</p>
			<form id="settings-form">
				<TextInput
					label="Task Timer (s)"
					name="taskSeconds"
					onChange={e => setTaskSeconds(e, handleSubmit)}
					onBlur={handleBlur}
					value={taskSeconds}
				/>
				<TextInput
					label="Break Timer (s)"
					name="breakSeconds"
					onChange={e => setBreakSeconds(e, handleSubmit)}
					onBlur={handleBlur}
					value={breakSeconds}
				/>
				<TextInput
					label="Streak Goal"
					name="streakGoal"
					onChange={e => setStreakGoal(e, handleSubmit)}
					onBlur={handleBlur}
					value={streakGoal}
				/>
			</form>
		</div>
	);
};

export default SettingsForm;
