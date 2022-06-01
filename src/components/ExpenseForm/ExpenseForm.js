import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const ExpenseForm = () => {
	return (
		<div>
			<Card className="mb-3">
				<Card.Header>Add Expense</Card.Header>
				<Card.Body>
					<Form>
						<Row>
							<Col md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										id="title"
										name="title"
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
									/>
								</Form.Group>
							</Col>
							<Col md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Date</Form.Label>
									<Form.Control
										type="date"
										id="amount"
										name="amount"
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
