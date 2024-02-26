import { Redirect, Route, Switch } from "react-router-dom";
import AllQoute from "./pages/AllQoute";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/quotes" />
			</Route>
			<Route path="/quotes" exact>
				<AllQoute />
			</Route>
			<Route path="/quotes/:quoteId">
				<QuoteDetails />
			</Route>
			<Route path="/new-quote">
				<NewQuote />
			</Route>
		</Switch>
	);
}

export default App;
