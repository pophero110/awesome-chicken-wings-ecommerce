import { CSSProperties } from '@nextui-org/react/types/theme';
import { Text, Container, Row, Grid } from '@nextui-org/react';
import { OrderSummaryType } from '../../pages/cart';

type OrderSummaryProps = {
	orderSummary: OrderSummaryType;
};
const OrderSummary: React.FC<OrderSummaryProps> = ({ orderSummary }) => {
	const { subtotal, total } = orderSummary;
	const style: CSSProperties = {
		backgroundColor: '#26292B',
		borderRadius: 'var(--ui-border-radius)',
		padding: '8px',
	};
	return (
		<Container style={style}>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Text b>Subtotal</Text>
				<Text b>${subtotal}</Text>
			</Row>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Text b>Tax</Text>
				<Text b>$0</Text>
			</Row>
			<div
				style={{
					borderBottom: '1px solid #697177',
					margin: '8px 0px',
				}}></div>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Text b>Total</Text>
				<Text b>${total}</Text>
			</Row>
		</Container>
	);
};

export default OrderSummary;
