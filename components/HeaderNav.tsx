import { Navbar, Text, Input, Dropdown, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { Logo } from './Logo';
import { SearchIcon } from './SearchIcon';
export default function HeaderNav() {
	return (
		<Navbar
			isBordered
			variant='sticky'
			css={{
				width: '100%',
			}}>
			<Navbar.Brand css={{ mr: '$4' }}>
				<Logo />
				<Text b color='inherit' css={{ mr: '$11' }} hideIn='xs'>
					Awesome Chicken
				</Text>
				<Navbar.Content hideIn='xs' variant='highlight'>
					<Link href='/'>
						<Navbar.Link isActive>Home</Navbar.Link>
					</Link>

					<Link href='/menu'>
						<Navbar.Link>Menu</Navbar.Link>
					</Link>
				</Navbar.Content>
			</Navbar.Brand>
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
						color='secondary'
						onAction={(actionKey) => console.log({ actionKey })}>
						<Dropdown.Item key='profile' css={{ height: '$18' }}>
							<Text b color='inherit' css={{ d: 'flex' }}>
								Signed in as
							</Text>
							<Text b color='inherit' css={{ d: 'flex' }}>
								zoey@example.com
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key='settings' withDivider>
							My Settings
						</Dropdown.Item>
						<Dropdown.Item key='team_settings'>
							Team Settings
						</Dropdown.Item>
						<Dropdown.Item key='analytics' withDivider>
							Analytics
						</Dropdown.Item>
						<Dropdown.Item key='system'>System</Dropdown.Item>
						<Dropdown.Item key='configurations'>
							Configurations
						</Dropdown.Item>
						<Dropdown.Item key='help_and_feedback' withDivider>
							Help & Feedback
						</Dropdown.Item>
						<Dropdown.Item key='logout' withDivider color='error'>
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
		</Navbar>
	);
}
