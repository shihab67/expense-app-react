import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetails() {
	const params = useParams();
	return (
		<>
			<div>QuoteDetails</div>
			<p>{params.quoteId}</p>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetails;
