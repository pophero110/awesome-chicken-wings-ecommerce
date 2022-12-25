export const Sandwich = [
	'Grilled',
	'Fried',
	'Buffalo',
	'Whiting',
	'Catfish',
	'Tilapia',
].map((name, id) => {
	return {
		name,
		price: 9.25,
	};
});

export const Wing = [...Array(15)].map((e, index) => {
	return {
		name: `${(index + 1) * 5}PC Chicken Wings`,
		price: index * 5.5,
	};
});

export const Hamburger = [
	'Hamburger',
	'Cheese Burger',
	'Teriyaki Burger',
	'BBQ Burger',
].map((name, id) => {
	return {
		name,
		price: 15,
	};
});

export const Salad = [
	{
		name: 'Garden Salad',
		price: 4.99,
	},
];

export const SideOrder = [
	{
		name: 'Mozzarella Sticks (6)',
		price: 4.99,
	},
];

export const PillySteak = [
	{
		name: 'Pilly Steak',
		price: 8.25,
	},
];

export const SeedfoodBoil = [
	{
		name: 'Green Mussel (1/2 LB)',
		price: 10,
	},
];

export const Shrimp = [
	{
		name: '6PC Shrimp Only',
		price: 7.25,
	},
];

export const ChickenTender = [
	{
		name: '2PC Tender',
		price: 5.25,
	},
];

export const Fish = [
	{
		name: '2PC Whiting',
		price: 8.99,
	},
];

export const FriedRice = [
	{
		name: 'Plain',
		price: 3.99,
	},
];

// Key as Category, Value as Item
export const CategoresItems = {
	Sandwich,
	Wing,
	Hamburger,
	Salad,
	SideOrder,
	PillySteak,
	SeedfoodBoil,
	Shrimp,
	ChickenTender,
	Fish,
	FriedRice,
};
