import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { Container } from "react-bootstrap";
import { useState } from "react";

const list_expenses = [
	{
		id: 1,
		date: "2022-05-01",
		title: "Toilet Paper",
		amount: 40,
	},
	{
		id: 2,
		date: "2022-05-02",
		title: "ladies Shoe",
		amount: 100,
	},
];

function App() {
	const [expenses, setExpenses] = useState(list_expenses);

	const handleExpense = (expense) => {
		setExpenses((previousExpesne) => {
			return [...previousExpesne, expense];
		});
	};

	return (
		<div className="App">
			<Container>
				<ExpenseItem
					onSaveExpense={handleExpense}
					expenses={expenses}
				/>
			</Container>
		</div>
	);
}

export default App;
