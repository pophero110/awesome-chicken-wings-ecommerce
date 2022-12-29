import React, { Dispatch, SetStateAction } from 'react';
import { Buy } from 'react-iconly';
import { Home } from 'react-iconly';
import { Category } from 'react-iconly';
import Link from 'next/link';
import { Badge } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';
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
	const { itemState } = useItems();
	const quantity = Object.values(itemState).reduce(
		(acc: number, cur: number) => acc + cur,
		0
	);
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
				{name === 'cart' ? (
					<Badge
						color='error'
						content={quantity > 100 ? '99+' : `${quantity}+`}
						size='sm'
						isInvisible={quantity < 1}
						shape='circle'>
						{mapIcon[name]}
					</Badge>
				) : (
					<Badge
						content=''
						size='xs'
						isInvisible={true}
						shape='circle'>
						{mapIcon[name]}
					</Badge>
				)}
			</a>
		</Link>
	);
};

export default NavItem;
