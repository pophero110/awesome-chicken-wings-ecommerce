import { Logo } from './Logo';
export default function Footer() {
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: 'black',
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1rem 12rem',
					flexDirection: 'column',
				}}>
				<Logo width={'2rem'} height={'2rem'}></Logo>
				<div
					className='footer__text'
					style={{
						display: 'flex',
						whiteSpace: 'nowrap',
						width: '100%',
						justifyContent: 'space-between',
						marginTop: '1rem',
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
				</div>
			</div>
		</div>
	);
}
