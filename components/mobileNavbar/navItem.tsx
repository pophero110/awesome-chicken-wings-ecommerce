import React from 'react';
import { Buy, Home, Category, User } from 'react-iconly';
import Link from 'next/link';
import { Badge } from '@nextui-org/react';
import { useItems } from '../../contexts/itemsContext';
import { useSetCartSection } from '../../contexts/cartSectionContext';
import { useRouter } from 'next/router';
type NavItemProps = {
	activeNavItem?: string;
	route?: string;
	type: string;
	style?: {};
};
const NavItem: React.FC<NavItemProps> = ({
	route,
	activeNavItem,
	style,
	type,
}) => {
	const router = useRouter();
	const { setCartSection } = useSetCartSection();
	const { itemState } = useItems();
	const quantity = Object.values(itemState).reduce(
		(acc: number, cur: number) => acc + cur,
		0
	);
	const mapIcon = {
		'/cart': <Buy set='bold' />,
		'/': <Home set='bold' />,
		'/menu': <Category set='bold' />,
		'/profile': <User set='bold' />,
	};

	const styles = {
		...style,
		padding: '15px 15px',
		textDecoration: 'none',
		color: 'white',
		borderTop: '4px solid #102C4C',
	};
	if (type == 'link') {
		return (
			<Link href={route}>
				<a
					aria-label='cart'
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
	} else {
		return (
			<a
				onClick={() => {
					if (router.pathname === '/menu') {
						setCartSection({ visible: true });
					} else {
						router.push('/cart');
					}
				}}
				aria-label='cart'
				style={
					activeNavItem === route
						? { ...styles, borderTop: '4px solid #0072F5' }
						: styles
				}>
				<Badge
					color='error'
					content={quantity > 100 ? '99+' : quantity}
					size='sm'
					isInvisible={quantity < 1}
					shape='circle'>
					{mapIcon[route]}
				</Badge>
			</a>
		);
	}
};

export default NavItem;
