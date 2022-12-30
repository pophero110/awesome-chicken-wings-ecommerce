import { Text, Grid } from '@nextui-org/react';
import Link from 'next/link';
type CartCheckoutProps = {
	total: number | null;
	setCheckoutModeHandler: () => void;
};
const CartCheckout: React.FC<CartCheckoutProps> = ({
	total,
	setCheckoutModeHandler,
}) => {
	return (
		<Grid
			style={{
				width: '100%',
			}}>
			<Link href='/checkout'>
				<a onClick={setCheckoutModeHandler}>
					<Text
						b
						style={{
							backgroundColor: 'var(--nextui-colors-blue600)',
							borderRadius: 'var(--ui-border-radius)',
							width: '100%',
							display: 'block',
							textAlign: 'center',
							padding: '0.7rem',
						}}>
						Continue To Payment • ${total}
					</Text>
				</a>
			</Link>
		</Grid>
	);
};

export default CartCheckout;
