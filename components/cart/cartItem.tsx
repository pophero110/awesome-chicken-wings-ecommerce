import { Container, Col, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import styles from './cartItem.module.css';
import Icon from '../icon';
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
			<Row
				style={{
					position: 'relative',
					height: '106px',
				}}>
				<Col
					span={6}
					style={{
						position: 'relative',
						height: '100%',
					}}>
					<Image
						className={styles.cartItem__img}
						src='/fruit-1.jpeg'
						layout='fill'
						alt='missing'></Image>
				</Col>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
					}}>
					<div
						style={{
							paddingLeft: '0.5rem',
						}}>
						<Text>{name}</Text>
						<Text b>{`$${price}`}</Text>
					</div>

					<div
						style={{
							display: 'flex',
							marginTop: 'auto',
							marginLeft: 'auto',
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
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CartItem;
