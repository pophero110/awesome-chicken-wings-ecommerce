import React from 'react';
import ItemList from '../components/menu/itemList';
import { ItemProps } from '../components/menu/item';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
	const items = await prisma.item.findMany();
	return {
		props: { items: JSON.parse(JSON.stringify(items)) },
	};
};

type MenuProps = {
	items: ItemProps[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
	return <ItemList items={items}></ItemList>;
};

export default Menu;
