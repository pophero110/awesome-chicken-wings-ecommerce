import { Col } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Logo } from './Logo';
export default function Footer() {
	const router = useRouter();
	console.log(router.pathname);
	if (router.pathname !== '/') {
		return null;
	}
	return (
		<Col
			style={{
				width: '100%',
				backgroundColor: 'black',
			}}
			css={{
				'@xsMax': {
					display: 'none',
				},
			}}>
			<Col
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1rem 12rem',
					flexDirection: 'column',
				}}
				css={{
					'@mdMax': {
						padding: '1rem 6rem !important',
					},
				}}>
				<Logo width={'2rem'} height={'2rem'}></Logo>
				<Col
					className='footer__text'
					style={{
						display: 'flex',
						whiteSpace: 'nowrap',
						width: '100%',
						justifyContent: 'space-between',
						marginTop: '1rem',
					}}
					css={{
						'@smMax': {
							flexDirection: 'column',
							alignItems: 'center',
						},
					}}>
					<div>Jiajin.webdeveloper@gmail.com</div>
					<div>Copyright © Jiajin Ou. All right reserved</div>
					<div
						style={{
							display: 'flex',
						}}>
						<div
							style={{
								marginRight: '2rem',
							}}>
							Terms & conditions
						</div>
						<div>Private policy</div>
					</div>
				</Col>
			</Col>
		</Col>
	);
}
