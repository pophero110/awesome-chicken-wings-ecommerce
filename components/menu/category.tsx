import { Text } from '@nextui-org/react';
import { ItemProps } from './item';
import style from './category.module.css';
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
			className={style.categoryNav__category}
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
