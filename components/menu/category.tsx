import React from 'react';

export type CategoryProps = {
	id: string;
	name: string;
};

const Category: React.FC<{ category: CategoryProps }> = ({ category }) => {
	return (
		<div className='categoryNav__category'>
			<p>{category.name}</p>
		</div>
	);
};

export default Category;
