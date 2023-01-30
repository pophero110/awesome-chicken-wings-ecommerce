import { Text } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';
import Link from 'next/link';
import { useSetCartSection } from '../../contexts/cartSectionContext';
const EmptyCartText = () => {
	const { setCartSection } = useSetCartSection();
	const style: CSSProperties = {
		position: 'absolute',
		top: '30vh',
		left: 0,
		right: 0,
		textAlign: 'center',
	};
	return (
		<div style={style}>
			<Text size={20}>No item found in your cart</Text>
			<Link href='/menu'>
				<div
					onClick={() => setCartSection({ visible: false })}
					style={{
						color: '#0072F5',
					}}>
					Go to find some food you love!
				</div>
			</Link>
		</div>
	);
};

export default EmptyCartText;
