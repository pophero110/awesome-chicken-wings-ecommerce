type lineItem = {
	unitPrice: number;
	quantity: number;
	itemId: number;
};

const calculateOrderTotal = (
	lineItems: lineItem[]
): {
	subtotal: number;
	total: number;
} => {
	const subtotal = parseFloat(
		lineItems
			.reduce((acc, cur) => {
				//@ts-ignore
				return acc + cur.quantity * cur.unitPrice;
			}, 0)
			.toFixed(2)
	);
	const total = subtotal;

	return { subtotal, total };
};
export default calculateOrderTotal;
