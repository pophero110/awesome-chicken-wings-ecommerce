import React from 'react';
import { Container, Spacer } from '@nextui-org/react';
import CartItemList from '../components/cart/cartItemList';
const Cart = () => {
	return (
		<Container>
			<Spacer y={1}></Spacer>
			<CartItemList></CartItemList>
		</Container>
	);
};

export default Cart;
