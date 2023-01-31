import { Col, Container, Row, Text } from '@nextui-org/react';
import { useSetItemModalContainer } from '../contexts/itemModalContext';
export default function SearchResultBox({ searchResult }) {
	const { setItemModalContainer } = useSetItemModalContainer();
	const handleSelection = (e) => {
		const item = e.currentTarget.children;

		const serializedItem = Array.from(item).reduce((acc, e) => {
			return { ...acc, ...{ [e.id]: e.innerText } };
		}, {});

		setItemModalContainer({
			visible: true,
			item: {
				id: serializedItem.id,
				price: serializedItem.price.substring(1),
				name: serializedItem.name,
			},
		});
	};
	return (
		<Col
			className='searchResultBox'
			css={{	
				position: 'absolute',
				transformOrigin: 'left center',
				right: '100vw',
				zIndex: '300',
				transition:
					'transform 225ms ease-in-out 0s, opacity 225ms linear 0s, right 1ms linear 30ms',
				transform: searchResult.length
					? 'translate3d(0%, 0%, 0px) scale(1)'
					: 'translate3d(0%, -5%, 0px) scale(1)',
				opacity: '1',
				borderRadius: '4px',
				backgroundColor: 'black',
				width: 'auto',
				minWidth: '100%',
				boxShadow:
					'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
				overflow: 'scroll',
				maxHeight: '50vh',
				overflowX: 'hidden',
			}}>
			<Container
				css={{
					display: searchResult.length ? 'block' : 'none',
					padding: 0,
				}}>
				{searchResult.map((item) => {
					return (
						<Row
							onClick={(e) => handleSelection(e)}
							key={item.refIndex}
							css={{
								display: 'flex',
								borderRadius: '4px',
								justifyContent: 'space-between',
								alignItems: 'center',
								'&:hover': {
									backgroundColor: '$accents0',
								},
							}}>
							<Text
								b
								id='name'
								css={{
									padding: '10px 10px',
									whiteSpace: 'nowrap',
								}}>
								{item.item.name}
							</Text>
							<Text
								b
								id='price'
								css={{
									padding: '10px 10px',
								}}>
								${item.item.price}
							</Text>
							<Text
								id='id'
								css={{
									display: 'none',
								}}>
								{item.item.id}
							</Text>
						</Row>
					);
				})}
			</Container>
		</Col>
	);
}
