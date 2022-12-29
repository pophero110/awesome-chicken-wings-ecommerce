type lineItem = {
	unitPrice: number;
	quantity: number;
	itemId: number;
};

const CalculateOrderTotal = (
	lineItems: lineItem[]
): {
	subtotal: number;
	total: number;
} => {
	const subtotal = lineItems.reduce((acc, cur) => {
		//@ts-ignore
		return acc + cur.quantity * cur.unitPrice;
	}, 0);
	const total = subtotal;

	return { subtotal, total };
};
export default CalculateOrderTotal;
