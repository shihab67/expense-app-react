import { Row, Col, Card } from "react-bootstrap";
import "./ExpenseItem.css";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";

export const ExpenseItem = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onSaveExpense(expenseData);
	};

	return (
		<div>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
			{props.expenses.map((expense) => (
				<Card className="mb-3 card-box">
					<Card.Body>
						<Row>
							<Col md={2}>{expense.date}</Col>
							<Col md={7}>{expense.title}</Col>
							<Col md={3} className="taka">
								${expense.amount}
							</Col>
						</Row>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};
