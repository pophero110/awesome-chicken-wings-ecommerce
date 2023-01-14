import { Navbar, Text, Input, Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { SearchIcon } from './SearchIcon';
import { useState, useEffect } from 'react';
import NavItem from './mobileNavbar/navItem';
import styles from './HeaderNav.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useSetNotification } from '../contexts/notification';
export default function HeaderNav() {
	useEffect(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById('headerNavbar').style.top = '0';
			} else {
				document.getElementById('headerNavbar').style.top = '-75px';
			}
			prevScrollpos = currentScrollPos;
		};
	});
	const { setNotification } = useSetNotification();
	const { data: session } = useSession();
	const [activeNavItem, setActiveNavItem] = useState('Home');
	const signoutHandler = () => {
		signOut({ redirect: false });
		setNotification('Sign out successfully');
	};
	return (
		<Navbar
			id='headerNavbar'
			disableBlur
			css={{
				transition: 'top 0.3s',
			}}
			variant='sticky'
			maxWidth={'fluid'}>
			<Navbar.Brand css={{ mr: '$4' }}>
				<Text b color='inherit' hideIn='xs'>
					Awesome Chicken
				</Text>
				{/* <Text b color='inherit' css={{ mr: '$11' }} hideIn='xs'>
					Awesome Chicken
				</Text> */}
			</Navbar.Brand>
			<Navbar.Content hideIn='xs' variant='default'>
				<Link href='/'>
					<Navbar.Link
						onClick={() => setActiveNavItem('Home')}
						isActive={activeNavItem === 'Home'}>
						Home
					</Navbar.Link>
				</Link>

				<Link href='/menu'>
					<Navbar.Link
						onClick={() => setActiveNavItem('Menu')}
						isActive={activeNavItem === 'Menu'}>
						Menu
					</Navbar.Link>
				</Link>
			</Navbar.Content>
			<Navbar.Content
				css={{
					'@xsMax': {
						w: '100%',
						jc: 'space-between',
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
							w: '100%',
							'@xsMax': {
								mw: '300px',
							},
							'& .nextui-input-content--left': {
								h: '100%',
								ml: '$4',
								dflex: 'center',
							},
						}}
						placeholder='Search...'
					/>
				</Navbar.Item>
				<Navbar.Item>
					<NavItem
						route={'/cart'}
						className={styles.headerNav__navItem}></NavItem>
				</Navbar.Item>
				<Dropdown placement='bottom-right'>
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
						aria-label='User menu actions'
						color='primary'
						onAction={(actionKey) => actionKey}>
						{session ? (
							<Dropdown.Item
								key='profile'
								css={{ height: '$14' }}>
								<Link href={'/profile'}>
									<a
										style={{
											display: 'block',
											width: '100%',
										}}>
										Profile
									</a>
								</Link>
							</Dropdown.Item>
						) : null}
						{session ? (
							<Dropdown.Item key='signout' color='warning'>
								<Text
									style={{
										width: '100%',
										display: 'block',
									}}
									b
									onClick={() => signoutHandler()}>
									Sign out
								</Text>
							</Dropdown.Item>
						) : (
							<Dropdown.Item key='signin' color='warning'>
								<Link href={'/auth/signin'}>
									<a
										style={{
											display: 'block',
											width: '100%',
										}}>
										Sign in
									</a>
								</Link>
							</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
		</Navbar>
	);
}
