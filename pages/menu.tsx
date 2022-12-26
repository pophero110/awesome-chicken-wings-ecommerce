import React from 'react';
import ItemList from '../components/menu/itemList';
import CategroyNav from '../components/menu/categoryNav';
import { CategoryProps } from '../components/menu/category';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { Container } from '@nextui-org/react';
import { useState } from 'react';
import Layout from '../components/Layout';
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
	const [activeCategoryName, setActiveCategoryName] = useState('Sandwich');
	const items = categories.filter(
		(category) => category.name === activeCategoryName
	)[0].items;
	console.log(activeCategoryName);
	return (
		<Layout>
			<Container style={{ paddingBottom: '4.5rem' }}>
				<CategroyNav
					categories={categories}
					activeCategoryName={activeCategoryName}
					setActiveCategoryName={setActiveCategoryName}></CategroyNav>
				<ItemList items={items}></ItemList>
			</Container>
		</Layout>
	);
};

export default Menu;
