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
					maxWidth: '90%',
				}}>
				<Row
					justify='flex-end'
					css={{
						flexDirection: 'column',
					}}>
					<Col>
						<Text
							color='white'
							css={{
								textAlign: 'end',
								fontFamily: 'var(--primary-font)',
								fontWeight: '700',
								fontSize: '3rem',
								lineHeight: '120%',
								color: 'var(--primary-color)',
								'@xsMin': {
									fontSize: '5rem',
								},
								'@smMin': {
									lineHeight: '100%',
									fontSize: '7rem',
								},
								'@mdMin': {
									lineHeight: '100%',
									fontSize: '4rem',
								},
							}}>
							We are dedicated to bringing you
						</Text>
					</Col>
					<Col>
						<Text
							css={{
								fontFamily: 'var(--primary-font)',
								fontWeight: '700',
								textShadow: 'var(--black-shadow)',
								fontSize: '3rem',
								textAlign: 'end',
								lineHeight: '120%',
								color: 'white',
								'@xsMin': {
									fontSize: '5rem',
								},
								'@smMin': {
									lineHeight: '100%',
									fontSize: '7rem',
								},
								'@mdMin': {
									lineHeight: '100%',
									fontSize: '4rem',
								},
							}}>
							AWESOME CHICKEN
						</Text>
					</Col>
				</Row>
				<Spacer y={1}></Spacer>
				<Row justify='flex-end'>
					<Button
						css={{
							zIndex: '2',
							fontSize: '$2xl',
							fontFamily: 'var(--primary-font)',
							fontWeight: '700',
							padding: '30px 0px',
						}}
						onPress={() =>
							document
								.getElementById('categoryList')
								.scrollIntoView({
									block: 'start',
									behavior: 'smooth',
								})
						}
						color='primary'>
						Order Now
					</Button>
				</Row>
			</Container>
		</div>
	);
}
