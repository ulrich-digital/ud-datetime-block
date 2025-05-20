import { useBlockProps } from "@wordpress/block-editor";
import { formatDateRange } from "./utils/formatDateRange";

export default function save({ attributes }) {
	const { startDate, startTime, endDate, endTime, customLabel, start, end } =
		attributes;

	const blockProps = useBlockProps.save({
		className: "wp-block-ud-datetime-block",
		"data-start": start,
		"data-end": end,
	});

	return (
		<div {...blockProps}>
			<div className="datetime">
				{customLabel ||
					formatDateRange(startDate, startTime, endDate, endTime)}
			</div>
		</div>
	);
}
