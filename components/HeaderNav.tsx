import { Navbar, Text, Input, Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { SearchIcon } from './SearchIcon';
import { useState, useEffect } from 'react';
import NavItem from './mobileNavbar/navItem';
import styles from './HeaderNav.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useSetNotification } from '../contexts/notification';
import { Login, User, Logout } from 'react-iconly';
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
			<Navbar.Content hideIn='xs' variant='default'>
				<Link href='/'>
					<Navbar.Link
						onClick={() => setActiveNavItem('Home')}
						isActive={activeNavItem === 'Home'}>
						Awesome Chicken
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
							'@xsMin': {
								w: '400px',
								justifyContent: 'center',
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
						css={{
							width: '200px',
						}}
						aria-label='User menu actions'
						color='primary'
						onAction={(actionKey) => actionKey}>
						{session ? (
							<Dropdown.Item
								key='profile'
								description='View order history'
								icon={<User set='bold' primaryColor='white' />}
								css={{ height: '$14' }}>
								<Link href={'/profile'}>
									<Text b>Profile</Text>
								</Link>
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
								<Text b onClick={() => signoutHandler()}>
									Sign out
								</Text>
							</Dropdown.Item>
						) : (
							<Dropdown.Item
								icon={<Login set='bold' primaryColor='white' />}
								key='signin'
								color='warning'>
								<Link href={'/auth/signin'}>
									<Text b>Sign in</Text>
								</Link>
							</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
		</Navbar>
	);
}
