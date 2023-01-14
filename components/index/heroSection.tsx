import { Text, Container, Button, Row, Col, Spacer } from '@nextui-org/react';
export default function HeroSection() {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				backgroundImage: 'url(/hero.png)',
				backgroundPosition: '25% 75%',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<Container
				display='flex'
				justify='center'
				alignItems='center'
				direction='column'
				css={{
					height: '80%',
				}}>
				<Row
					justify='flex-end'
					css={{
						flexDirection: 'column',
					}}>
					<Col>
						<Text
							weight='extrabold'
							css={{
								textAlign: 'end',
								textGradient:
									'45deg, $yellow600 -20%, $red600 100%',
								fontSize: '$xl',
								'@xsMin': {
									fontSize: '$2xl',
								},
							}}>
							We are dedicated to bringing you
						</Text>
					</Col>
					<Col>
						<Text
							weight='extrabold'
							color='white'
							css={{
								textAlign: 'end',
								fontSize: '$3xl',
								'@xsMax': {
									fontSize: '$2xl',
								},
							}}>
							THE AWESOME CHICKEN
						</Text>
					</Col>
				</Row>
				<Spacer y={1}></Spacer>
				<Row justify='flex-end'>
					<Button
						onPress={() =>
							document
								.getElementById('categoryList')
								.scrollIntoView({
									block: 'start',
									behavior: 'smooth',
								})
						}
						color='gradient'>
						Order Now
					</Button>
				</Row>
			</Container>
		</div>
	);
}
