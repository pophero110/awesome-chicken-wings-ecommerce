import React from 'react';
import style from './item.module.css';
import { Card, Text } from '@nextui-org/react';
import Icon from '../svg/icon';
import { useItems, useItemDispatch } from '../../contexts/itemsContext';
export type ItemProps = {
	id: string;
	name: string;
	price: number;
};

const Item: React.FC<ItemProps> = ({ id, name, price }) => {
	const { itemState } = useItems();
	const { itemDispatch } = useItemDispatch();
	const handlePlusClick = () => {
		itemDispatch({ type: 'addItem', id });
	};
	const handleMinusClick = () => {
		itemDispatch({ type: 'subtractItem', id });
	};
	return (
		<Card className={style.menu__item}>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={'https://nextui.org/images/fruit-1.jpeg'}
					objectFit='cover'
					width='100%'
					height={150}
					alt={name}
				/>
				<div className={style.menu__item__metadata}>
					<Text b style={{ backgroundColor: 'transparent' }}>
						{name}
					</Text>
					<Text color='white'>{`$${price}`}</Text>
				</div>
				<div className={style.menu__item__action}>
					{itemState[id] >= 1 ? (
						<>
							<Icon
								width='30px'
								height='30px'
								type='minus'
								onClick={handleMinusClick}></Icon>
							<span
								style={{
									paddingLeft: '5px',
									paddingRight: '5px',
									color: '#EAF4FF',
									fontSize: '1.1rem',
								}}>
								{itemState[id]}
							</span>
						</>
					) : null}

					<Icon
						width='30px'
						height='30px'
						type='plus'
						onClick={handlePlusClick}></Icon>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Item;
