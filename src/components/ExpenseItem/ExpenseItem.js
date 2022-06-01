import { Row, Col, Card } from "react-bootstrap";
import './ExpenseItem.css';

export const ExpenseItem = () => {
	return (
		<div>
			<Card className="mb-3 card-box">
				<Card.Body>
					<Row>
						<Col md={2}>20 jan 2022</Col>
						<Col md={7}>Toilet Paper</Col>
						<Col md={3} className="taka">
							$40.00
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
};
