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
				bottom: '0',
				position: 'fixed',
				display: 'flex',
				justifyContent: 'center',
			}}
			css={{
				'@lgMax': {
					position: 'static !important',
				},
				'@xsMax': {
					display: 'none !important',
				},
			}}>
			<Col
				style={{
					maxWidth: '80%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1rem 2rem',
					flexDirection: 'column',
				}}
				css={{
					'@mdMax': {
						padding: '1rem 6rem !important',
					},
				}}>
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
					<div>Copyright © 2023 Jiajin Ou. All rights reserved.</div>
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
