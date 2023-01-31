import { useEffect } from 'react';
import style from './slider.module.css';
import { ReactNode } from 'react';
import { Button, Col } from '@nextui-org/react';
type SliderProps = {
	children: ReactNode[];
	scrollTo: number;
};
const Slider: React.FC<SliderProps> = ({ children, scrollTo }) => {
	const handleScrollLeft = () => {
		const slider = document.getElementsByClassName(
			'categoryNav__slider'
		)[0];

		slider.scrollLeft = slider.scrollLeft - 200;
	};
	const handleScrollRight = () => {
		const slider = document.getElementsByClassName(
			'categoryNav__slider'
		)[0];

		slider.scrollLeft = slider.scrollLeft + 200;
	};
	useEffect(() => {
		const slider = document.getElementsByClassName(
			'categoryNav__slider'
		)[0];
		slider.scrollLeft = 80 * scrollTo;
	}, [scrollTo]);
	return (
		<div
			className={'categoryNav__slider ' + style.categoryNav__slider}
			style={{
				display: 'flex',
				overflowX: 'scroll',
				scrollBehavior: 'smooth',
				scrollbarWidth: 'none',
				paddingTop: '5px',
				paddingBottom: '5px',
			}}>
			<Col
				css={{
					position: 'absolute',
					height: '0',
					transform: 'translate(0px, 36px)',
					width: 'calc(100vw - 380px)',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'end',
					'@mdMin': {
						display: 'none',
					},
					'@smMax': {
						width: '99%',
					},
				}}>
				<Button
					onPress={handleScrollLeft}
					css={{
						left: '0',
						padding: '0',
						minWidth: '30px',
						backgroundColor: 'black',
						height: '33px',
					}}>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M10.2071 3.29289C10.5976 3.68342 10.5976 4.31658 10.2071 4.70711L6.91421 8L10.2071 11.2929C10.5976 11.6834 10.5976 12.3166 10.2071 12.7071C9.81658 13.0976 9.18342 13.0976 8.79289 12.7071L4.79289 8.70711C4.60536 8.51957 4.5 8.26522 4.5 8C4.5 7.73478 4.60536 7.48043 4.79289 7.29289L8.79289 3.29289C9.18342 2.90237 9.81658 2.90237 10.2071 3.29289Z'
							fill='white'></path>
					</svg>
				</Button>
				<Button
					onPress={handleScrollRight}
					css={{
						backgroundColor: 'black',
						padding: '0',
						minWidth: '30px',
						height: '33px',
					}}>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M5.79289 12.7071C5.40237 12.3166 5.40237 11.6834 5.79289 11.2929L9.08579 8L5.79289 4.70711C5.40237 4.31658 5.40237 3.68342 5.79289 3.29289C6.18342 2.90237 6.81658 2.90237 7.20711 3.29289L11.2071 7.29289C11.3946 7.48043 11.5 7.73478 11.5 8C11.5 8.26521 11.3946 8.51957 11.2071 8.70711L7.20711 12.7071C6.81658 13.0976 6.18342 13.0976 5.79289 12.7071Z'
							fill='white'></path>
					</svg>
				</Button>
			</Col>

			<Col
				css={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'center',
					'@mdMax': {
						paddingLeft: '30px',
					},
				}}>
				{children}
				<Col
					css={{
						'@mdMin': {
							display: 'none',
						},
					}}>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</Col>
			</Col>
		</div>
	);
};

export default Slider;
