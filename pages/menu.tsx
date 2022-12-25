import React from 'react';
import ItemList from '../components/menu/itemList';
import CategroyNav from '../components/menu/categoryNav';
import { ItemProps } from '../components/menu/item';
import { CategoryProps } from '../components/menu/category';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { Container } from '@nextui-org/react';
export const getStaticProps: GetStaticProps = async () => {
	const items = await prisma.item.findMany();
	const categories = await prisma.category.findMany();
	return {
		props: {
			items: JSON.parse(JSON.stringify(items)),
			categories: JSON.parse(JSON.stringify(categories)),
		},
	};
};

type MenuProps = {
	items: ItemProps[];
	categories: CategoryProps[];
};

const Menu: React.FC<MenuProps> = ({ items, categories }) => {
	return (
		<Container>
			<CategroyNav categories={categories}></CategroyNav>
			<ItemList items={items}></ItemList>
		</Container>
	);
};

export default Menu;
