import { Navbar, Text, Input, Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { SearchIcon } from './SearchIcon';
import { useState, useEffect } from 'react';
import NavItem from './mobileNavbar/navItem';
import { signOut, useSession } from 'next-auth/react';
import { useSetNotification } from '../contexts/notification';
import { Login, User, Logout, Home } from 'react-iconly';
import { useRouter, Router } from 'next/router';

export default function HeaderNav() {
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
	const [currentPage, setCurrentPage] = useState('');
	useEffect(() => {
		setCurrentPage(router.pathname);
		if (router.pathname === '/menu') {
			setActiveNavItem('Menu');
		}
		const handlerRouteStart = (path) => {
			setCurrentPage(path);
			if (path === '/menu') {
				setActiveNavItem('Menu');
			}
		};
		Router.events.on('routeChangeStart', handlerRouteStart);

		return () => {
			Router.events.off('routeChangeStart', handlerRouteStart);
		};
	}, []);
	if (currentPage !== '/cart') {
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
									'@smMax': {
										display: 'none',
									},
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
						css={{
							borderTop: '0px',
							'@xsMax': {
								display: 'none',
							},
						}}>
						<NavItem
							type={currentPage !== '/' ? 'icon' : 'link'}
							route='/cart'></NavItem>
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
									icon={
										<User set='bold' primaryColor='white' />
									}
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
										<Logout
											set='bold'
											primaryColor='white'
										/>
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
									icon={
										<Login
											set='bold'
											primaryColor='white'
										/>
									}
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
	} else {
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
				<Navbar.Content activeColor={'warning'} variant='underline'>
					<Link href={'/menu'}>
						<Navbar.Link
							css={{
								'--nextui--navbarItemUnderlineHeight':
									'2px !important',
							}}>
							<svg
								style={{
									marginRight: '5px',
								}}
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'>
								<path
									d='M11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L4.84222 10.7436C4.75796 10.8278 4.65733 10.9283 4.57595 11.0242C4.48166 11.1352 4.35611 11.3038 4.28052 11.5365C4.18264 11.8377 4.18264 12.1623 4.28052 12.4635C4.35611 12.6962 4.48166 12.8648 4.57595 12.9758C4.65733 13.0717 4.75796 13.1722 4.84222 13.2564L10.2929 18.7071C10.6834 19.0976 11.3166 19.0976 11.7071 18.7071C12.0976 18.3166 12.0976 17.6834 11.7071 17.2929L7.41421 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L11.7071 6.70711Z'
									fill='currentColor'></path>
							</svg>
							<Text b color='white'>
								Back to Menu
							</Text>
						</Navbar.Link>
					</Link>
				</Navbar.Content>
				<Navbar.Content>
					<Link href={'/'}>
						<Navbar.Link onClick={() => setActiveNavItem('')}>
							<Home set='bold' primaryColor='#F5A524' />
							<Text
								b
								color={'#F5A524'}
								css={{
									marginLeft: '10px',
									'@xsMax': {
										opacity: '0',
									},
								}}>
								Awesome Chicken
							</Text>
						</Navbar.Link>
					</Link>
				</Navbar.Content>
				<Navbar.Content></Navbar.Content>
			</Navbar>
		);
	}
}
