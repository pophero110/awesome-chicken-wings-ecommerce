import ItemList from '../components/menu/itemList';
import CategroyNav from '../components/menu/categoryNav';
import { CategoryProps } from '../components/menu/category';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { Container, Spacer } from '@nextui-org/react';
import { useCategory } from '../contexts/categoryContext';
export const getStaticProps: GetStaticProps = async () => {
	const categories = await prisma.category.findMany({
		include: { items: { include: { item: true } } },
	});
	const mapCategories = categories.map((category) => {
		return {
			id: category.id,
			name: category.name,
			items: category.items.map((item) => {
				return {
					id: item.item.id,
					name: item.item.name,
					price: item.item.price,
				};
			}),
		};
	});
	return {
		props: {
			categories: JSON.parse(JSON.stringify(mapCategories)),
		},
	};
};

type MenuProps = {
	categories: CategoryProps[];
};

const Menu: React.FC<MenuProps> = ({ categories }) => {
	const { activeCategory } = useCategory();
	const items = categories.filter(
		(category) => category.name === activeCategory.name
	)[0].items;
	return (
		<>
			<Container>
				<CategroyNav categories={categories}></CategroyNav>
				<Spacer y={1}></Spacer>
				<ItemList items={items}></ItemList>
			</Container>
		</>
	);
};

export default Menu;
