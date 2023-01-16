import { Navbar, Text, Input, Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { SearchIcon } from './SearchIcon';
import { useState } from 'react';
import NavItem from './mobileNavbar/navItem';
import { signOut, useSession } from 'next-auth/react';
import { useSetNotification } from '../contexts/notification';
import { Login, User, Logout, Home } from 'react-iconly';
import { useRouter } from 'next/router';
import { useSetCartSection } from '../contexts/cartSectionContext';

export default function HeaderNav() {
	const { setCartSection } = useSetCartSection();
	const router = useRouter();
	const { setNotification } = useSetNotification();
	const { data: session } = useSession();
	const [activeNavItem, setActiveNavItem] = useState('');
	const handleMenuAction = (key) => {
		if (key === 'profile') {
			router.push('/profile');
		}
		if (key === 'signin') {
			router.push('/auth/signin');
		}
		if (key === 'signout') {
			signOut({ redirect: false });
			setNotification('Sign out successfully');
			router.push('/');
		}
	};
	return (
		<Navbar
			id='headerNavbar'
			disableBlur
			isCompact
			css={{
				transition: 'top 0.3s',
				borderBottom: '2px solid #2B2F31',
			}}
			variant='sticky'
			maxWidth={'fluid'}>
			<Navbar.Content
				hideIn='xs'
				activeColor={'warning'}
				variant='underline'>
				<Link href={'/'}>
					<Navbar.Link onClick={() => setActiveNavItem('')}>
						<Home set='bold' primaryColor='#F5A524' />
						<Text
							b
							color={'#F5A524'}
							css={{
								marginLeft: '10px',
							}}>
							Awesome Chicken
						</Text>
					</Navbar.Link>
				</Link>

				<Link href={'/menu'}>
					<Navbar.Link
						css={{
							'--nextui--navbarItemUnderlineHeight':
								'2px !important',
						}}
						isActive={activeNavItem == 'Menu'}
						onClick={() => setActiveNavItem('Menu')}>
						<Text b color='white'>
							Menu
						</Text>
					</Navbar.Link>
				</Link>
			</Navbar.Content>
			<Navbar.Content
				css={{
					'@xsMax': {
						w: '100%',
						jc: 'space-center',
					},
				}}>
				<Navbar.Item
					css={{
						'@xsMax': {
							w: '100%',
							jc: 'center',
						},
					}}>
					<Input
						aria-label='search'
						clearable
						contentLeft={
							<SearchIcon
								fill='var(--nextui-colors-accents6)'
								size={16}
							/>
						}
						contentLeftStyling={false}
						css={{
							'@xsMax': {
								w: '100%',
								marginLeft: '50px',
							},
							'& .nextui-input-content--left': {
								h: '100%',
								ml: '$4',
								dflex: 'center',
							},
						}}
						placeholder='Search Item'
					/>
				</Navbar.Item>
				<Navbar.Item
					onClick={() => {
						setCartSection({ visible: true });
					}}
					css={{
						borderTop: '0px',
						'@xsMax': {
							display: 'none',
						},
					}}>
					<NavItem type='icon' route='/cart'></NavItem>
				</Navbar.Item>
				<Dropdown placement='bottom-right' isBordered>
					<Navbar.Item>
						<Dropdown.Trigger>
							<Avatar
								bordered
								as='button'
								color='primary'
								size='md'
								src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						onAction={(key) => handleMenuAction(key)}
						css={{
							width: '200px',
						}}
						aria-label='User menu actions'
						color='primary'>
						{session ? (
							<Dropdown.Item
								key='profile'
								description='View order history'
								icon={<User set='bold' primaryColor='white' />}
								css={{ height: '$14' }}>
								<Text
									b
									css={{
										display: 'block',
										width: '100%',
									}}>
									Profile
								</Text>
							</Dropdown.Item>
						) : null}
						{session ? (
							<Dropdown.Item
								icon={
									<Logout set='bold' primaryColor='white' />
								}
								key='signout'
								withDivider
								color='warning'>
								<Text
									b
									css={{
										display: 'block',
										width: '100%',
									}}>
									Sign out
								</Text>
							</Dropdown.Item>
						) : (
							<Dropdown.Item
								icon={<Login set='bold' primaryColor='white' />}
								key='signin'
								color='warning'>
								<Text
									b
									css={{
										display: 'block',
										width: '100%',
									}}>
									Sign in
								</Text>
							</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
		</Navbar>
	);
}
