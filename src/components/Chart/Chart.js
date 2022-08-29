import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
	const dataPointValues = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const totalMaximun = Math.max(...dataPointValues);
	return (
		<div className="chart mb-4">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximun}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};
