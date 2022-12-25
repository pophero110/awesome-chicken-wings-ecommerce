import React from 'react';
import { GetStaticProps } from 'next';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';
import prisma from '../lib/prisma';
import Item, { ItemProps } from '../components/menu/item';
import { Grid } from '@nextui-org/react';

export const getStaticProps: GetStaticProps = async () => {
	const items = await prisma.item.findMany();
	return {
		props: { items: JSON.parse(JSON.stringify(items)) },
	};
};

export type MenuProps = {
	items: ItemProps[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
	return (
		<Grid.Container gap={2} justify='flex-start'>
			{items.map((item) => {
				return (
					<Grid xs={6} sm={3} key={item.id}>
						<Item item={item}></Item>
					</Grid>
				);
			})}
		</Grid.Container>
	);
};

export default Menu;
