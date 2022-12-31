import { useEffect } from 'react';
import style from './slider.module.css';
const Slider = ({ children }) => {
	useEffect(() => {
		const slider = document.getElementsByClassName(
			'categoryNav__slider'
		)[0];
		let mouseX = 0;
		let scollLeft = 0;
		const mouseUpHandler = function () {
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		};
		const mouseMoveHandler = function (e) {
			// How far the mouse has been moved
			const dx = e.clientX - mouseX;

			// Scroll the element
			slider.scrollLeft = scollLeft - dx;
		};
		const mouseDownHandler = function (e) {
			scollLeft = slider.scrollLeft;
			mouseX = e.clientX;

			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler);
		};
		slider.addEventListener('mousedown', mouseDownHandler);
		return () => {
			document.removeEventListener('mousedown', mouseDownHandler);
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		};
	}, []);
	return (
		<div
			className={'categoryNav__slider ' + style.categoryNav__slider}
			style={{
				display: 'flex',
				overflowX: 'scroll',
				justifyContent: 'space-between',
				scrollBehavior: 'smooth',
			}}>
			{children}
		</div>
	);
};

export default Slider;
