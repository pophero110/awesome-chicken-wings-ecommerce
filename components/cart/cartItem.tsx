import React from 'react';
import { Container, Col, Row, Text, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import styles from './cartItem.module.css';
import Icon from '../svg/icon';
import { CSSProperties } from '@nextui-org/react/types/theme';
const CartItem = () => {
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
					<Text>Chicken Wing</Text>
					<Text b>{`$15.0`}</Text>
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
						onClick={() => {}}></Icon>
					<span
						style={{
							paddingLeft: '5px',
							paddingRight: '5px',
							color: '#EAF4FF',
							fontSize: '1.1rem',
						}}>
						0
					</span>
					<Icon
						onClick={() => {}}
						width='30px'
						height='30px'
						type='plus'></Icon>
				</Col>
			</Row>
		</Container>
	);
};

export default CartItem;
