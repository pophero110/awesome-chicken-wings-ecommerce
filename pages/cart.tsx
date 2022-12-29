import React, { useEffect, useState } from 'react';
import { Container, Spacer, Grid, Text } from '@nextui-org/react';
import CartItemList from '../components/cart/cartItemList';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { useItems } from '../contexts/itemsContext';
import OrderSummary from '../components/cart/orderSummary';
import CartCheckout from '../components/cart/cartCheckout';
import EmptyCartText from '../components/cart/emptyCartText';
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
	mapItemsById: {
		id: {
			name: string;
			price: number;
		};
	};
};
export type OrderSummaryType = {
	subtotal: number | null;
	total: number | null;
};
const Cart: React.FC<CartProps> = ({ mapItemsById }) => {
	const { itemState } = useItems();
	const emptyCart = !Object.keys(itemState).length;
	const [orderSummary, setOrderSummary] = useState<OrderSummaryType>({
		subtotal: null,
		total: null,
	});
	const [checkoutMode, setCheckoutMode] = useState(false);
	const setCheckoutModeHandler = () => {
		setCheckoutMode(true);
	};
	useEffect(() => {
		const createOrder = async () => {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					itemsData: { ...itemState },
					checkoutMode,
				}),
			};
			await fetch('/api/orders', requestOptions)
				.then((response) => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response;
				})
				.then(async (response) => {
					const orderSummary = await response.json();
					setOrderSummary({ ...orderSummary });
				})
				.catch((error) => {
					// TODO
					// show error to customer
					// log error for debugging
					console.log(error);
				});
		};
		if (!emptyCart) {
			createOrder();
		}
	}, [JSON.stringify(itemState), checkoutMode]);
	console.log(emptyCart);
	console.log(itemState);
	return (
		<>
			{!emptyCart ? (
				<Container>
					<Spacer y={1}></Spacer>
					<Grid.Container gap={1} justify='flex-start'>
						<CartItemList
							mapItemsById={mapItemsById}></CartItemList>
						<OrderSummary
							orderSummary={orderSummary}></OrderSummary>
						<CartCheckout
							total={orderSummary.total}
							setCheckoutModeHandler={
								setCheckoutModeHandler
							}></CartCheckout>
					</Grid.Container>
				</Container>
			) : (
				<EmptyCartText></EmptyCartText>
			)}

			<Spacer y={4}></Spacer>
		</>
	);
};

export default Cart;
