import CartItem from './cartItem';
import { Grid } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';
type CartItemListProps = {
	mapItemsById: {
		id: {
			name: string;
			price: number;
		};
	};
};
const CartItemList = ({ mapItemsById }: CartItemListProps) => {
	const { itemState } = useItems();
	const itemIds = Object.keys(itemState);
	const cartItems = itemIds.map((id) => {
		return itemState[id] === 0 ? null : (
			<Grid xs={12} sm={6} key={id}>
				<CartItem
					id={id}
					quantity={itemState[id]}
					name={mapItemsById[id].name}
					price={mapItemsById[id].price}></CartItem>
			</Grid>
		);
	});
	return <>{cartItems}</>;
};

export default CartItemList;
