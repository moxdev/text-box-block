import {
	AlignmentToolbar,
	BlockControls,
	ContrastChecker,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onBackgroundColorChange = (newBgColor) => {
		setAttributes({ backgroundColor: newBgColor });
	};

	const onTextColorChange = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings', 'text-box')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor,
						color: textColor,
					},
				})}
				placeholder={__('Your text here', 'text-box')}
				onChange={onChangeText}
				value={text}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}
