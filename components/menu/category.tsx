import { Text } from '@nextui-org/react';
import { ItemProps } from './item';

import { useCategory, useSetCategory } from '../../contexts/categoryContext';
export type CategoryProps = {
	id: string;
	name: string;
	items: ItemProps[];
};

const Category: React.FC<CategoryProps> = ({ name, id }) => {
	const { activeCategory } = useCategory();
	const { setActiveCategory } = useSetCategory();
	return (
		<Text
			size={'$sm'}
			onClick={() =>
				setActiveCategory({
					name,
					id,
				})
			}
			css={{
				flex: '0 0 1',
				whiteSpace: 'nowrap',
				textAlign: 'center',
				padding: '0px 10px',
				borderRadius: 'var(--nextui-radii-lg)',
				cursor: 'pointer',
				userSelect: 'none',
				paddingTop: '5px',
				'@smMax': {
					marginRight: '15px',
				},
			}}
			style={
				activeCategory.name === name
					? { borderBottom: '3px solid #F5A524', borderRadius: '0' }
					: {}
			}>
			{name}
		</Text>
	);
};

export default Category;
