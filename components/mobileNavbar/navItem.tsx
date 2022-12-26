import React, { Dispatch, SetStateAction } from 'react';
import { Buy } from 'react-iconly';
import { Home } from 'react-iconly';
import { Category } from 'react-iconly';
import Link from 'next/link';
type NavItemProps = {
	name: string;
	activeNavItem: string;
	setActiveNavItem: Dispatch<SetStateAction<string>>;
};
const NavItem: React.FC<NavItemProps> = ({
	name,
	activeNavItem,
	setActiveNavItem,
}) => {
	const mapIcon = {
		cart: <Buy set='bold' />,
		home: <Home set='bold' />,
		menu: <Category set='bold' />,
	};
	const mapRoute = {
		home: '/',
		cart: '/cart',
		menu: '/menu',
	};
	const style = {
		padding: '15px 15px',
		textDecoration: 'none',
		color: 'white',
		borderTop: '4px solid #102C4C',
	};
	return (
		<Link href={mapRoute[name]}>
			<a
				onClick={() => setActiveNavItem(name)}
				style={
					activeNavItem === name
						? { ...style, borderTop: '4px solid #0072F5' }
						: style
				}>
				{mapIcon[name]}
			</a>
		</Link>
	);
};

export default NavItem;
