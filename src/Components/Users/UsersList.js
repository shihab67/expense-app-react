import React from "react";

export default function UsersList(props) {
	return (
		<div className="row">
			{props.users.map((user) => (
				<div className="col-md-12 mb-3" key={Math.random()}>
					<div className="card">
						<div className="card-body text-center bg-info">
							<h3>
								{user.username} ({user.age} years old)
							</h3>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
