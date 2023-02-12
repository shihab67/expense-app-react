import React from "react";

export const Input = React.forwardRef((props, ref) => {
	return (
		<div className="mb-2">
			<label className="h6" htmlFor={props.label}>
				{props.label}
			</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});
