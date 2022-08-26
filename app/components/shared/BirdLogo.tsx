import React, { FC, memo } from 'react';

type Props = {
	color: string;
	className: string;
	width?: number;
	height?: number;
	viewBox?: string;
};

export default memo(function BirdLogo({
	color,
	className,
	width,
	height,
	viewBox,
}: Props) {
	return (
		<svg
			className={className}
			width={width || '40'}
			height={height || '29'}
			viewBox={viewBox || '0 0 40 29'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="20" cy="8.75" r="3.75" fill={color} />
			<path
				d="M36.2105 10C34.1053 13.125 29.2632 17.5 25.4737 17.5C25.4737 15 23.5789 7.5 27.3684 3.75C31.1579 0.625 37.9071 0 40 0C39.3684 5.625 37.4736 8.125 36.2105 10Z"
				fill={color}
			/>
			<path
				d="M3.78947 10C5.89467 13.125 10.7368 17.5 14.5263 17.5C14.5263 15 16.4211 7.5 12.6316 3.75C8.84211 0.625 2.09287 0 5.96046e-07 0C0.63158 5.625 2.52635 8.125 3.78947 10Z"
				fill={color}
			/>
			<path
				d="M28.75 22.5C27 25.625 25.8333 28.125 20.5833 28.75C17.0833 28.75 13 27.5 11.25 22.5C13 20.625 12.4167 21.25 14.75 18.75C15.9167 23.125 18.828 23.75 20.5833 23.75C21.75 23.75 24.0833 23.125 25.25 18.75C27 20.625 27 20.625 28.75 22.5Z"
				fill={color}
			/>
		</svg>
	);
});
