import React from 'react';
import { Container, Spacer } from '@nextui-org/react';
import CartItemList from '../components/cart/cartItemList';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
	const items = await prisma.item.findMany();
	const mapItemsById = items.reduce((acc, { id, name, price }) => {
		return { ...acc, ...{ [id]: { name, price } } };
	}, {});
	return {
		props: {
			mapItemsById: JSON.parse(JSON.stringify(mapItemsById)),
		},
	};
};

type CartProps = {
	mapItemsById: {};
};
const Cart: React.FC<CartProps> = ({ mapItemsById }) => {
	return (
		<>
			<Container>
				<Spacer y={1}></Spacer>
				<CartItemList mapItemsById={mapItemsById}></CartItemList>
			</Container>
			<Spacer y={4}></Spacer>
		</>
	);
};

export default Cart;
