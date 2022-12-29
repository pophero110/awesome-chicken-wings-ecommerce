import { Button, Grid } from '@nextui-org/react';
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
				position: 'sticky',
				bottom: '0',
			}}>
			<Button
				onPress={setCheckoutModeHandler}
				style={{
					width: '100%',
				}}>
				Continue To Payment • ${total}
			</Button>
		</Grid>
	);
};

export default CartCheckout;
