import { Row, Col, Form } from "react-bootstrap";

import React, { useRef } from "react";

export const ExpenseSearch = (props) => {
	const year = useRef(null);

	const handleChange = () => {
		props.onYearFilter(year.current.value);
	};

	return (
		<div>
			<Row className="pb-3 d-flex justify-content-end">
				<Col md={2}>
					<Form.Select id="search" onChange={handleChange} ref={year}>
						<option disabled>Search by year</option>
						<option value="2018">2018</option>  
						<option value="2019">2019</option>
						<option value="2020">2020</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</Form.Select>
				</Col>
			</Row>
		</div>
	);
};
