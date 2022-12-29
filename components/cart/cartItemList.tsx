import CartItem from './cartItem';
import { Grid } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';

type CartItemListProps = {
	mapItemsById: {};
};
const CartItemList: React.FC<CartItemListProps> = ({ mapItemsById }) => {
	const { itemState } = useItems();
	const itemIds = Object.keys(itemState);
	const items = itemIds.map((id) => {
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
	return items;
};

export default CartItemList;
