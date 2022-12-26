import React from 'react';
import { Text } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { ItemProps } from './item';
import { Dispatch, SetStateAction } from 'react';
import style from './category.module.css';
export type CategoryProps = {
	items: ItemProps[];
	name: string;
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
					? { backgroundColor: 'blue', color: 'white' }
					: {}
			}>
			{name}
		</Text>
	);
};

export default Category;
