import React from 'react';
import { Text } from '@nextui-org/react';
export type CategoryProps = {
	id: string;
	name: string;
};

const Category: React.FC<{ category: CategoryProps }> = ({
	category,
	activeCategory,
}) => {
	const style = {
		whiteSpace: 'nowrap',
		padding: '3px 10px',
		marginRight: '5px',
		borderRadius: '25px',
		cursor: 'pointer',
	};
	const selectCategory = (e) => {
		const categories = document.getElementsByClassName(
			'categoryNav__category'
		);
		for (const category of categories) {
			category.style.backgroundColor = 'transparent';
		}
		e.target.style.backgroundColor = '#0072f5';
	};
	return (
		<Text
			onClick={selectCategory}
			className='categoryNav__category'
			style={{ ...style, ...activeCategory }}>
			{category.name}
		</Text>
	);
};

export default Category;
