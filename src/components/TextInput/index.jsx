import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const TextInput = ({ label, name, onChange, onBlur, type = "number", value }) => (
	<div className="text-input">
		<label>
			{label}
			<input
				name={name}
				value={value}
				onChange={e => onChange(e.target.value)}
				onBlur={onBlur}
				type={type}
			/>
		</label>
	</div>
);

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TextInput;
