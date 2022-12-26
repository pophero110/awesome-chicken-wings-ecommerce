import React, { useState } from 'react';
import style from './item.module.css';
import { Card, Text } from '@nextui-org/react';
import Icon from '../svg/icon';
export type ItemProps = {
	id: string;
	name: string;
	price: number;
};

const Item: React.FC<{ item: ItemProps }> = ({ item }) => {
	const [displayMinus, setDisplayMinus] = useState(false);
	const handlePlusClick = () => {
		setDisplayMinus(true);
	};
	const handleMinusClick = () => {
		setDisplayMinus(false);
	};
	return (
		<Card className={style.menu__item}>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={'https://nextui.org/images/fruit-1.jpeg'}
					objectFit='cover'
					width='100%'
					height={150}
					alt={item.name}
				/>
				<div className={style.menu__item__metadata}>
					<Text b style={{ backgroundColor: 'transparent' }}>
						{item.name}
					</Text>
					<Text color='white'>{`$${item.price}`}</Text>
				</div>
				<div className={style.menu__item__action}>
					{displayMinus ? (
						<>
							<Icon
								type='minus'
								onClick={handleMinusClick}></Icon>
							<span
								style={{
									paddingLeft: '5px',
									paddingRight: '5px',
									color: '#EAF4FF',
								}}>
								0
							</span>
						</>
					) : (
						''
					)}

					<Icon type='plus' onClick={handlePlusClick}></Icon>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Item;
