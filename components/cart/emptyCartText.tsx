import { Text } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';
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
			<Text size={20}>No item found in your shopping cart</Text>
			<Text color='primary' size={20}>
				Go to find some food you love!
			</Text>
		</div>
	);
};

export default EmptyCartText;
