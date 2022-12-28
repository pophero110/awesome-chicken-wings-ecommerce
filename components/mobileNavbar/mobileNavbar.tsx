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
	return (
		<div style={style}>
			<NavItem
				key={'home'}
				activeNavItem={activeNavItem}
				setActiveNavItem={setActiveNavItem}
				name={'home'}></NavItem>
			<NavItem
				key={'menu'}
				activeNavItem={activeNavItem}
				setActiveNavItem={setActiveNavItem}
				name={'menu'}></NavItem>
			<NavItem
				key={'cart'}
				activeNavItem={activeNavItem}
				setActiveNavItem={setActiveNavItem}
				name={'cart'}></NavItem>
		</div>
	);
};

export default MoblieNavbar;
