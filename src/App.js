import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { Container } from "react-bootstrap";

function App() {
	const expenses = [
		{
			id: 1,
			date: "20 jan 2022",
			title: "Toilet Paper",
			amount: 40,
		},
		{
			id: 2,
			date: "21 jan 2022",
			title: "ladies Shoe",
			amount: 100,
		},
	];

	const handleExpense = (expense) => {
		console.log("from app.js");
		console.log(expense);
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
