import React from 'react';
import { Text } from '@nextui-org/react';
import { ItemProps } from './item';
import { Dispatch, SetStateAction } from 'react';
import style from './category.module.css';
export type CategoryProps = {
	id: string;
	name: string;
	items: ItemProps[];
	setActiveCategoryName: Dispatch<SetStateAction<string>>;
	activeCategoryName: string;
};

const Category: React.FC<CategoryProps> = ({
	name,
	setActiveCategoryName,
	activeCategoryName,
}) => {
	return (
		<Text
			onClick={() => setActiveCategoryName(name)}
			className={style.categoryNav__category}
			style={
				activeCategoryName === name
					? { backgroundColor: '#0F3158', color: '#EAF4FF' }
					: {}
			}>
			{name}
		</Text>
	);
};

export default Category;
