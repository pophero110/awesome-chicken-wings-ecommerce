import React from 'react';
import Item, { ItemProps } from './item';
import { Grid } from '@nextui-org/react';
type ItemListProps = {
	items: ItemProps[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
	return (
		<Grid.Container gap={1} justify='flex-start'>
			{items.map((item) => {
				return (
					<Grid xs={12} sm={3} key={item.id}>
						<Item
							id={item.id}
							name={item.name}
							price={item.price}></Item>
					</Grid>
				);
			})}
		</Grid.Container>
	);
};

export default ItemList;
