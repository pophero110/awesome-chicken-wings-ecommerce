import React from 'react';
import { Buy } from 'react-iconly';
import { Home } from 'react-iconly';
import { Category } from 'react-iconly';
import Link from 'next/link';
import { Badge } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';
type NavItemProps = {
	activeNavItem?: string;
	route: string;
	style?: {};
	className?: string;
};
const NavItem: React.FC<NavItemProps> = ({
	route,
	activeNavItem,
	className,
	style,
}) => {
	const { itemState } = useItems();
	const quantity = Object.values(itemState).reduce(
		(acc: number, cur: number) => acc + cur,
		0
	);
	const mapIcon = {
		'/cart': <Buy set='bold' />,
		'/': <Home set='bold' />,
		'/menu': <Category set='bold' />,
	};

	const styles = {
		...style,
		padding: '15px 15px',
		textDecoration: 'none',
		color: 'white',
		borderTop: '4px solid #102C4C',
	};
	return (
		<Link href={route}>
			<a
				aria-label='cart'
				className={className}
				style={
					activeNavItem === route
						? { ...styles, borderTop: '4px solid #0072F5' }
						: styles
				}>
				{route === '/cart' ? (
					<Badge
						color='error'
						content={quantity > 100 ? '99+' : quantity}
						size='sm'
						isInvisible={quantity < 1}
						shape='circle'>
						{mapIcon[route]}
					</Badge>
				) : (
					<Badge
						content=''
						size='xs'
						isInvisible={true}
						shape='circle'>
						{mapIcon[route]}
					</Badge>
				)}
			</a>
		</Link>
	);
};

export default NavItem;
