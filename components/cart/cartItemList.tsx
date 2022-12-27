import React from 'react';
import CartItem from './cartItem';
import { Grid } from '@nextui-org/react';
const CartItemList = () => {
	return (
		<Grid.Container gap={1} justify='flex-start'>
			{[...Array(5)].map((e, i) => {
				return (
					<Grid xs={12} sm={6} key={i}>
						<CartItem key={i}></CartItem>
					</Grid>
				);
			})}
		</Grid.Container>
	);
};

export default CartItemList;
