import React from "react";

export const Meal = (props) => {
	return (
		<div className="card mt-2">
			<div className="card-body">
				<div className="row d-flex justify-content-between align-items-center">
					<div className="col-md-6">
						<h5 className="card-title">{props.meal.name}</h5>
						<p className="card-text">{props.meal.description}</p>
						<p className="card-text">${props.meal.price}</p>
					</div>
					<div className="col-md-6 text-end">
						<button className="btn btn-success">
							<i className="fas fa-plus mx-1"></i>Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
