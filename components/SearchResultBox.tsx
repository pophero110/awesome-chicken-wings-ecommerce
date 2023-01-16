import { Col, Container, Row, Text } from '@nextui-org/react';

export default function SearchResultBox({ searchResult }) {
	return (
		<Col
			css={{
				position: 'absolute',
				transformOrigin: 'left center',
				transition:
					'transform 225ms ease-in-out 0s, opacity 225ms linear 0s',
				transform: searchResult.length
					? 'translate3d(0%, 0px, 0px) scale(1)'
					: 'translate3d(0%, -5%, 0px) scale(1)',
				borderRadius: '4px',
				backgroundColor: 'black',
				width: 'auto',
				boxShadow:
					'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
			}}>
			<Container
				css={{
					display: searchResult.length ? 'block' : 'none',
					padding: 0,
				}}>
				{searchResult.map((item) => {
					console.log(item);
					return (
						<Row
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
								css={{
									padding: '10px 10px',
									whiteSpace: 'nowrap',
								}}>
								{item.item.name}
							</Text>
							<Text
								b
								css={{
									padding: '10px 10px',
								}}>
								${item.item.price}
							</Text>
						</Row>
					);
				})}
			</Container>
		</Col>
	);
}
