import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { CartProvider } from "./store/CartProvider";

function App() {
	return (
		<CartProvider>
			<Header />
			<div className="container pt-4 d-flex justify-content-center align-items-center">
				<Meals />
			</div>
		</CartProvider>
	);
}

export default App;
