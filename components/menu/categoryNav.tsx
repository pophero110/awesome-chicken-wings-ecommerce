import React from 'react';
import Category, { CategoryProps } from './category';

type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	return (
		<div className='categoryNav'>
			{categories.map((category) => {
				return (
					<Category category={category} key={category.id}></Category>
				);
			})}
		</div>
	);
};

export default CategroyNav;
