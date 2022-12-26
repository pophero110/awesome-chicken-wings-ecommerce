import React from 'react';
import { Text } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { ItemProps } from './item';
import { Dispatch, SetStateAction } from 'react';
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
	const style: CSSProperties = {
		whiteSpace: 'nowrap',
		padding: '3px 10px',
		marginRight: '5px',
		borderRadius: '25px',
		cursor: 'pointer',
		userSelect: 'none',
	};
	return (
		<Text
			onClick={() => setActiveCategoryName(name)}
			className='categoryNav__category'
			style={
				activeCategoryName === name
					? { ...style, backgroundColor: 'blue', color: 'white' }
					: style
			}>
			{name}
		</Text>
	);
};

export default Category;
