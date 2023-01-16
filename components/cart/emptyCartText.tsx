import { Text } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';
import Link from 'next/link';
const EmptyCartText = () => {
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
			<Link href='/menu'>Go to find some food you love!</Link>
		</div>
	);
};

export default EmptyCartText;
