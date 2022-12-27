import React from 'react';
import { Container, Col, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import styles from './cartItem.module.css';
import Icon from '../svg/icon';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { useItemDispatch } from '../../contexts/itemsContext';
import { addItem, subtractItem } from '../../reducers/itemReducer';
type CartItemProps = {
	id: string;
	quantity: number;
	name: string;
	price: number;
};
const CartItem: React.FC<CartItemProps> = ({ id, quantity, name, price }) => {
	const { itemDispatch } = useItemDispatch();
	const style: CSSProperties = {
		backgroundColor: '#26292B',
		borderRadius: 'var(--ui-border-radius)',
		padding: 'var(--ui-padding)',
	};
	return (
		<Container style={style}>
			<Row>
				<Col>
					<Image
						className={styles.cartItem__img}
						src='/../public/fruit-1.jpeg'
						width={'100%'}
						height={'100%'}
						alt='missing'></Image>
				</Col>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Text>{name}</Text>
					<Text b>{`$${price}`}</Text>
				</Col>
				<Col
					style={{
						display: 'flex',
						alignSelf: 'end',
						justifyContent: 'center',
						paddingBottom: '5px',
					}}>
					<Icon
						width='30px'
						height='30px'
						type='minus'
						onClick={() =>
							itemDispatch({ type: subtractItem, id })
						}></Icon>
					<span
						style={{
							paddingLeft: '5px',
							paddingRight: '5px',
							color: '#EAF4FF',
							fontSize: '1.1rem',
						}}>
						{quantity}
					</span>
					<Icon
						onClick={() => itemDispatch({ type: addItem, id })}
						width='30px'
						height='30px'
						type='plus'></Icon>
				</Col>
			</Row>
		</Container>
	);
};

export default CartItem;
