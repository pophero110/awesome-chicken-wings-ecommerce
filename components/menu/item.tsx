import React from 'react';

import { Card, Text, Row } from '@nextui-org/react';
export type ItemProps = {
	id: string;
	name: string;
	price: number;
};

const Item: React.FC<{ item: ItemProps }> = ({ item }) => {
	return (
		<Card isPressable>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={'https://nextui.org/images/fruit-1.jpeg'}
					objectFit='cover'
					width='100%'
					height={140}
					alt={item.name}
				/>
			</Card.Body>
			<Card.Footer css={{ justifyItems: 'flex-start' }}>
				<Row wrap='wrap' justify='space-between' align='center'>
					<Text b>{item.name}</Text>
					<Text
						css={{
							color: '$accents7',
							fontWeight: '$semibold',
							fontSize: '$sm',
						}}>
						{`$${item.price}`}
					</Text>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default Item;
