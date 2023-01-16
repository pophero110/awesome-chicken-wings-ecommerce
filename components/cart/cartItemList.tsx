import CartItem from './cartItem';
import { Grid } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';
import EmptyCartText from './emptyCartText';
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
	const cartItems = itemIds.length
		? itemIds.map((id) => {
				return itemState[id] === 0 ? null : (
					<Grid xs={12} key={id}>
						<CartItem
							id={id}
							quantity={itemState[id]}
							name={mapItemsById[id].name}
							price={mapItemsById[id].price}></CartItem>
					</Grid>
				);
		  })
		: null;
	return <Grid.Container gap={1}>{cartItems}</Grid.Container>;
};

export default CartItemList;
