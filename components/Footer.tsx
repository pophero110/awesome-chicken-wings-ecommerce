import { Col } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logo';
export default function Footer() {
	const router = useRouter();
	if (router.pathname !== '/') {
		return null;
	}
	return (
		<Col
			style={{
				width: '100%',
				backgroundColor: 'black',
				position: 'fixed',
				bottom: '0',
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
						<Link href={'/terms'}>
							<div
								style={{
									marginRight: '2rem',
								}}>
								Terms & conditions
							</div>
						</Link>

						<Link href={'/privatePolicy'}>
							<div>Private policy</div>
						</Link>
					</div>
				</Col>
			</Col>
		</Col>
	);
}
