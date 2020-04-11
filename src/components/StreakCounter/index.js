import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const StreakCounter = ({ streakCount }) => (
	<div className="title">Streak: {streakCount}</div>
);

StreakCounter.propTypes = {
	streakCount: PropTypes.number.isRequired
};

export default StreakCounter;
