import CartItemList from './cart/cartItemList';
import { Container, Button, Col, Text } from '@nextui-org/react';
import { useSetCartSection } from '../contexts/cartSectionContext';
import { useCartSection } from '../contexts/cartSectionContext';

import { useItems } from '../contexts/itemsContext';
import { useRouter } from 'next/router';
import EmptyCartText from './cart/emptyCartText';
export default function CartSection({ mapItemsById, onCheckout }) {
	const router = useRouter();
	const { itemState } = useItems();
	const { setCartSection } = useSetCartSection();
	const { cartSection } = useCartSection();
	const itemIds = Object.keys(itemState);
	const subtotal = itemIds.length
		? itemIds.reduce((acc, id) => {
				const prices = mapItemsById[id].price * itemState[id];
				return acc + prices;
		  }, 0)
		: null;
	return (
		<Col
			id='CartSection'
			css={{
				height: 'calc(100vh - 52px)',
				overflowY: 'scroll',
				overflowX: 'hidden',
				position: 'fixed',
				right: '0',
				borderLeft: '2px solid #2B2F31',
				backgroundColor: 'black',
				width: '370px',
				transformOrigin: 'left center',
				transition:
					'transform 225ms ease-in-out 0s, opacity 225ms linear 0s',
				opacity: 1,
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				'@smMax': {
					height: '100vh',
					top: '0',
					zIndex: '$3',
					borderLeft: '0px',
					shadow: 'rgb(255 255 255 / 20%) 0px 8px 24px',
					transform: cartSection.visible
						? 'translate3d(0%, 0px, 0px) scale(1)'
						: 'translate3d(100%, 0px, 0px) scale(1)',
				},
				'@xsMax': {
					height: '100vh',
					width: '100%',
					transform: cartSection.visible
						? 'translate3d(0%, 0px, 0px) scale(1)'
						: 'translate3d(100%, 0px, 0px) scale(1)',
				},
			}}>
			<Col
				css={{
					padding: '10px',
				}}>
				<Container
					css={{
						borderBottom: '1px solid black #2B2F31',
						padding: '0 0 5px 0',
					}}>
					<Col
						css={{
							padding: '20px 20px 20px 5px',
							backgroundColor: 'transparent',
							border: 'none',
							marginRight: '0',
							color: 'white',
							display: 'block',
							minWidth: '0',
							'@smMin': {
								display: 'none',
							},
						}}>
						<svg
							onClick={() => setCartSection({ visible: false })}
							width='24'
							height='24'
							viewBox='0 0  24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'>
							<path
								d='M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z'
								fill='currentColor'></path>
						</svg>
					</Col>
					{!!Object.keys(itemState).length && !onCheckout && (
						<div
							style={{
								padding: '0px 5px',
							}}>
							<Button
								onPress={() => {
									setCartSection({ visible: false });
									router.push('/cart');
								}}
								color='error'
								css={{
									display: 'flex',
									justifyContent: 'center',
									padding: '0',
									width: '100%',
									'@smMax': {
										width: '100%',
									},
								}}>
								<Text b size={'$md'}>
									Check Out {`       $${subtotal}`}
								</Text>
							</Button>
						</div>
					)}
				</Container>
				<Col
					css={{
						width: '350px',
						display: 'flex',
						justifyContent: 'center',
						'@xsMax': {
							width: '100%',
						},
					}}>
					{!!Object.keys(itemState).length ? (
						<CartItemList
							mapItemsById={mapItemsById}></CartItemList>
					) : (
						<EmptyCartText></EmptyCartText>
					)}
				</Col>
			</Col>
		</Col>
	);
}
