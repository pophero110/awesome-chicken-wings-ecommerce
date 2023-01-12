import {
	Navbar,
	Text,
	Input,
	Dropdown,
	Avatar,
	Image,
} from '@nextui-org/react';
import Link from 'next/link';
// import { Logo } from './Logo';
import { SearchIcon } from './SearchIcon';
import { useState } from 'react';
import NavItem from './mobileNavbar/navItem';
import styles from './HeaderNav.module.css';
import { useSession } from 'next-auth/react';
export default function HeaderNav({ darkMode, setDarkMode }) {
	const [activeNavItem, setActiveNavItem] = useState('Home');
	const { data: session } = useSession();
	const actionHandler = (actionKey) => {
		switch (actionKey) {
			case 'toggleMode':
				setDarkMode(!darkMode);
				break;

			case 'signin':
				break;

			case 'logout':
				break;
			default:
				break;
		}
	};
	return (
		<Navbar isBordered variant='sticky'>
			<Navbar.Brand css={{ mr: '$4' }}>
				<Image
					autoResize={true}
					width={50}
					height={50}
					src='./logo.png'
					alt='logo'
				/>
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

				<Link href='/menu'>
					<Navbar.Link
						onClick={() => setActiveNavItem('About')}
						isActive={activeNavItem === 'About'}>
						About
					</Navbar.Link>
				</Link>

				<Link href='/menu'>
					<Navbar.Link
						onClick={() => setActiveNavItem('About')}
						isActive={activeNavItem === 'About'}>
						About
					</Navbar.Link>
				</Link>

				<Link href='/menu'>
					<Navbar.Link
						onClick={() => setActiveNavItem('About')}
						isActive={activeNavItem === 'About'}>
						About
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
						onAction={(actionKey) => actionHandler(actionKey)}>
						{session ? (
							<Dropdown.Item
								key='profile'
								css={{ height: '$18' }}>
								<Text b color='inherit' css={{ d: 'flex' }}>
									Signed in as
								</Text>
								<Text b color='inherit' css={{ d: 'flex' }}>
									zoey@example.com
								</Text>
							</Dropdown.Item>
						) : null}
						<Dropdown.Item key='toggleMode' withDivider>
							{darkMode ? 'Light Mode' : 'Dark Mode'}
						</Dropdown.Item>
						{session ? (
							<Dropdown.Item
								key='signout'
								withDivider
								color='warning'>
								Sign out
							</Dropdown.Item>
						) : (
							<Dropdown.Item
								key='signin'
								withDivider
								color='warning'>
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
