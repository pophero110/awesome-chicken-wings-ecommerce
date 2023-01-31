import { Table } from '@nextui-org/react';
export default function OrderList({ orders }) {
	return (
		<Table
			aria-label='Order Table'
			shadow
			css={{
				height: 'auto',
				padding: '0',
				marginTop: '1rem',
				minWidth: '100%',
			}}>
			<Table.Header>
				<Table.Column>Order#</Table.Column>
				<Table.Column>Date</Table.Column>
				<Table.Column>Total</Table.Column>
			</Table.Header>
			<Table.Body>
				{orders.map((order) => {
					return (
						<Table.Row key={order.orderNumber}>
							<Table.Cell>{order.orderNumber}</Table.Cell>
							<Table.Cell>
								{new Date(order.createdAt).toLocaleDateString()}
							</Table.Cell>
							<Table.Cell>${order.total}</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table>
	);
}
