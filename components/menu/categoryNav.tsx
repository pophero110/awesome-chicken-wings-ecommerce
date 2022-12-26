import React from 'react';
import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
import { Dispatch, SetStateAction } from 'react';
type CategroyNavProps = {
	categories: CategoryProps[];
	setActiveCategoryName: Dispatch<SetStateAction<string>>;
	activeCategoryName: string;
};
const CategroyNav: React.FC<CategroyNavProps> = ({
	categories,
	activeCategoryName,
	setActiveCategoryName,
}) => {
	return (
		<div className='categoryNav' style={{ paddingTop: '10px' }}>
			<Slider>
				{categories.map((category, index) => {
					return (
						<Category
							activeCategoryName={activeCategoryName}
							setActiveCategoryName={setActiveCategoryName}
							name={category.name}
							key={category.id}
							id={''}
							items={[]}></Category>
					);
				})}
			</Slider>
		</div>
	);
};

export default CategroyNav;
