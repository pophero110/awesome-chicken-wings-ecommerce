import React from 'react';
import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { useEffect } from 'react';
type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	const activeCategory: CSSProperties = {
		backgroundColor: '#0072f5',
		color: 'white',
	};

	return (
		<div className='categoryNav' style={{ paddingTop: '10px' }}>
			<Slider>
				{categories.map((category, index) => {
					return (
						<Category
							activeCategory={index === 0 ? activeCategory : {}}
							category={category}
							key={category.id}></Category>
					);
				})}
			</Slider>
		</div>
	);
};

export default CategroyNav;
