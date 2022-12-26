import React from 'react';

type IconProps = {
	type: string;
	onClick: () => void;
};
const Icon: React.FC<IconProps> = ({ type, onClick }) => {
	const plusIcon = (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width='24px'
			height='24px'
			viewBox='0 0 24 24'
			role='presentation'>
			<g transform='translate(2 2)'>
				<path
					d='M14.67,20H5.33a5.349,5.349,0,0,1-3.944-1.394A5.356,5.356,0,0,1,0,14.67V5.33A5.358,5.358,0,0,1,1.386,1.386,5.358,5.358,0,0,1,5.33,0h9.33a5.372,5.372,0,0,1,3.945,1.386A5.345,5.345,0,0,1,20,5.33v9.34C20,18.057,18.057,20,14.67,20ZM6.33,9.16a.819.819,0,0,0-.83.83.839.839,0,0,0,.83.84H9.16V13.66a.83.83,0,1,0,1.66,0V10.83h2.84a.835.835,0,0,0,0-1.669H10.82V6.34a.83.83,0,1,0-1.66,0V9.16Z'
					transform='translate(0 0)'
					fill='white'></path>
			</g>
		</svg>
	);
	const minusIcon = (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			width='24px'
			height='24px'
			viewBox='0 0 24 24'
			role='presentation'>
			<g transform='translate(2 2)'>
				<path
					d='M 14.67 20 H 5.33 a 5.349 5.349 0 0 1 -3.944 -1.394 A 5.356 5.356 0 0 1 0 14.67 V 5.33 A 5.358 5.358 0 0 1 1.386 1.386 A 5.358 5.358 0 0 1 5.33 0 h 9.33 a 5.372 5.372 0 0 1 3.945 1.386 A 5.345 5.345 0 0 1 20 5.33 v 9.34 C 20 18.057 18.057 20 14.67 20 Z M 6.33 9.16 a 0.819 0.819 0 0 0 -0.83 0.83 a 0.839 0.839 0 0 0 0.83 0.84 H 9.26 a 0.83 0 0 1 0 1.66 0 h 2.84 a 0.835 0.835 0 0 0 0 -1.669 H 10.82 V 9.16 Z'
					transform='translate(0 0)'
					fill='white'></path>
			</g>
		</svg>
	);
	return <>{type === 'plus' ? plusIcon : minusIcon}</>;
};

export default Icon;
