import React from 'react';
import style from './slider.module.css';
const Slider = ({ children }) => {
	return <div className={style.categoryNav__slider}>{children}</div>;
};

export default Slider;
