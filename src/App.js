import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";

function App() {
	return (
		<>
			<Header />
			<div className="container pt-4 d-flex justify-content-center align-items-center">
				<Meals />
			</div>
		</>
	);
}

export default App;
