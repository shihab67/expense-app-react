import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import { Container } from "react-bootstrap";
import { ExpenseForm } from "./components/ExpenseForm/ExpenseForm";

function App() {
	return (
		<div className="App">
			<Container>
				<ExpenseForm />
				<ExpenseItem />
			</Container>
		</div>
	);
}

export default App;
