import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
	{
		id: "q1",
		author: "Max",
		text: "Learning React is fun!",
	},
	{
		id: "q2",
		author: "Maximilan",
		text: "Learning React is great!",
	},
];

function QuoteDetails() {
	const params = useParams();
	const match = useRouteMatch();
	const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.url}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetails;
