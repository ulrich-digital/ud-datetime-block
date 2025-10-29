import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, ToggleControl, BaseControl } from '@wordpress/components';
import { formatDateRange } from './utils/formatDateRange';

export default function Edit({ attributes, setAttributes }) {
	const {
		startDate,
		startTime,
		endDate,
		endTime,
		customLabel,
		showOptions,
		start,
		end,
	} = attributes;

	const toIsoDatetime = (date, time) => {
		if (!date) return '';
		return `${date}T${(time || '00:00').padEnd(5, '0')}:00`;
	};

	return (
		<div {...useBlockProps()}>
			<div className="datetime-main-row">
				<TextControl
					label={__('Startdatum', 'ud-datetime-block')}
					help={__('Pflichtfeld', 'ud-datetime-block')}
					className='startdatum'
					type="date"
					value={startDate}
					onChange={(value) => {
						const iso = toIsoDatetime(value, startTime);
						setAttributes({ startDate: value, start: iso });
					}}
					__nextHasNoMarginBottom={true}
					__next40pxDefaultSize={true}
				/>

				<TextControl
					label={__('Startzeit', 'ud-datetime-block')}
					help={__('Optional', 'ud-datetime-block')}
					className='startzeit'
					type="time"
					value={startTime}
					onChange={(value) => {
						const iso = toIsoDatetime(startDate, value);
						setAttributes({ startTime: value, start: iso });
					}}
					__nextHasNoMarginBottom={true}
					__next40pxDefaultSize={true}
				/>

				<BaseControl
					label={__('Vorschau', 'ud-datetime-block')}
					help={__('Ausgabe im Frontend', 'ud-datetime-block')}
					className='preview'
					__nextHasNoMarginBottom={true}
				>
					<div className="datetime-preview">
						<strong>
							{customLabel || formatDateRange(startDate, startTime, endDate, endTime)}
						</strong>
					</div>
				</BaseControl>
			</div>

			<ToggleControl
				label={__('Optionen anzeigen', 'ud-datetime-block')}
				checked={showOptions}
				onChange={(value) => setAttributes({ showOptions: value })}
				__nextHasNoMarginBottom={true}
			/>

			{showOptions && (
				<div className="datetime-options">
					<TextControl
						label={__('Enddatum', 'ud-datetime-block')}
						help={__('Optional', 'ud-datetime-block')}
						className='enddatum'

						type="date"
						value={endDate}
						onChange={(value) => {
							const iso = toIsoDatetime(value, endTime);
							setAttributes({ endDate: value, end: iso });
						}}
						__nextHasNoMarginBottom={true}
						__next40pxDefaultSize={true}
					/>
					<TextControl
						label={__('Endzeit', 'ud-datetime-block')}
						help={__('Optional', 'ud-datetime-block')}
						className='endzeit'
						type="time"
						value={endTime}
						onChange={(value) => {
							const iso = toIsoDatetime(endDate, value);
							setAttributes({ endTime: value, end: iso });
						}}
						__nextHasNoMarginBottom={true}
						__next40pxDefaultSize={true}
					/>
					<TextControl
						label={__('Anzeigetext (optional)', 'ud-datetime-block')}
						help={__('Überschreibt die Anzeige', 'ud-datetime-block')}
						className='anzeigetext'
						value={customLabel}
						onChange={(value) => setAttributes({ customLabel: value })}
						__nextHasNoMarginBottom={true}
						__next40pxDefaultSize={true}
					/>
				</div>
			)}
		</div>
	);
}
