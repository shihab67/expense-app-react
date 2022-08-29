import { Row, Col, Card, Alert } from "react-bootstrap";
import "./ExpenseItem.css";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { ExpenseSearch } from "../ExpenseSearch/ExpenseSearch";
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import { useState } from "react";

export const ExpenseItem = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onSaveExpense(expenseData);
	};

	const [year, setYear] = useState(); 

	const handleFilter = (year) => {
		setYear(year);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return new Date(expense.date).getFullYear().toString() === year;
	});

	return (
		<div>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

			<ExpenseSearch onYearFilter={handleFilter} />

			<ExpensesChart expenses={filteredExpenses} />

			{filteredExpenses.length === 0 ? (
				<Alert variant="primary">
					No expenses found for this year!
				</Alert>
			) : (
				filteredExpenses.map((expense, key) => {
					return (
						<Card
							className="mb-3 bg-secondary text-white"
							key={key}
						>
							<Card.Body>
								<Row>
									<Col md={2}>
										{new Date(expense.date).toDateString()}
									</Col>
									<Col md={7}>{expense.title}</Col>
									<Col md={3} className="taka">
										${expense.amount}
									</Col>
								</Row>
							</Card.Body>
						</Card>
					);
				})
			)}
		</div>
	);
};
