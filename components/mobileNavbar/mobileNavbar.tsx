import NavItem from './navItem';
import { CSSProperties } from '@nextui-org/react/types/theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './mobileNavbar.module.css';
const MoblieNavbar = () => {
	const [activeNavItem, setActiveNavItem] = useState('/');

	const router = useRouter();
	useEffect(() => {
		const handleRouteDone = (url) => {
			setActiveNavItem(url);
		};
		router.events.on('routeChangeComplete', handleRouteDone);
		return () => {
			router.events.off('routeChangeComplete', handleRouteDone);
		};
	}, [activeNavItem]);
	const style: CSSProperties = {
		position: 'fixed',
		width: '100%',
		bottom: 0,
		display: 'flex',
		justifyContent: 'space-around',
		backgroundColor: '#102C4C',
	};
	return (
		<div className={styles.mobileNavbar} style={style}>
			<NavItem
				type='link'
				key={'home'}
				route={'/'}
				activeNavItem={activeNavItem}></NavItem>
			<NavItem
				type='link'
				key={'menu'}
				route={'/menu'}
				activeNavItem={activeNavItem}></NavItem>
			<NavItem
				type='link'
				key={'cart'}
				route={'/cart'}
				activeNavItem={activeNavItem}></NavItem>
		</div>
	);
};

export default MoblieNavbar;
