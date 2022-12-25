import React from 'react';
import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	return (
		<div
			className='categoryNav'
			style={{ paddingBottom: '20px', paddingTop: '20px' }}>
			<Slider>
				{categories.map((category, index) => {
					return (
						<Category
							activeCategory={
								index === 0
									? { backgroundColor: '#0072f5' }
									: {}
							}
							category={category}
							key={category.id}></Category>
					);
				})}
			</Slider>
		</div>
	);
};

export default CategroyNav;
