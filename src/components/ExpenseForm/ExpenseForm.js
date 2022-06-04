import { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const ExpenseForm = (props) => {
	const [values, setValues] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const set = (name) => {
		return ({ target: { value } }) => {
			setValues((oldValues) => ({ ...oldValues, [name]: value }));
		};
	};

	const handleSubmit = (e) => { 
		e.preventDefault();
		props.onSaveExpenseData(values);
		setValues({
			title: "",
			amount: "",
			date: "",
		});
	};
	return (
		<div>
			<Card className="mb-3">
				<Card.Header>Add Expense</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										id="title"
										name="title"
										value={values.title}
										onChange={set("title")}
									/>
								</Form.Group>
							</Col>
							<Col md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Amount</Form.Label>
									<Form.Control
										type="text"
										id="amount"
										name="amount"
										value={values.amount}
										onChange={set("amount")}
									/>
								</Form.Group>
							</Col>
							<Col md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Date</Form.Label>
									<Form.Control
										type="date"
										id="date"
										name="date"
										value={values.date}
										onChange={set("date")}
									/>
								</Form.Group>
							</Col>
							<Col md={12}>
								<Button variant="primary" type="submit">
									Add
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};
