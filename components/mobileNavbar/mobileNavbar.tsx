import React from 'react';
import NavItem from './navItem';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { useState } from 'react';
const MoblieNavbar = () => {
	const [activeNavItem, setActiveNavItem] = useState('');
	const style: CSSProperties = {
		position: 'fixed',
		width: '100%',
		bottom: 0,
		display: 'flex',
		justifyContent: 'space-around',
		backgroundColor: '#102C4C',
	};
	const customNavItem = ['home', 'menu', 'cart'];
	return (
		<div style={style}>
			{customNavItem.map((name) => {
				return (
					<NavItem
						key={name}
						activeNavItem={activeNavItem}
						setActiveNavItem={setActiveNavItem}
						name={name}></NavItem>
				);
			})}
		</div>
	);
};

export default MoblieNavbar;
