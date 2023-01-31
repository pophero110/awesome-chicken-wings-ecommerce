export const Sandwich = [
	'Grilled Sandwich',
	'Fried Sandwich',
	'Buffalo Sandwich',
	'Whiting Sandwich',
	'Catfish Sandwich',
	'Tilapia Sandwich',
].map((name) => {
	return {
		name,
		price: 9.25,
	};
});

export const Wing = [...Array(15)].map((e, index) => {
	return {
		name: `${(index + 1) * 5}PC Chicken Wings`,
		price: (index + 1) * 5.5,
	};
});

export const Hamburger = [
	'Hamburger',
	'Cheese Burger',
	'Teriyaki Burger',
	'BBQ Burger',
].map((name) => {
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

export const Items = [
	...Sandwich,
	...FriedRice,
	...Fish,
	...ChickenTender,
	...Hamburger,
	...Shrimp,
	...Salad,
	...SeedfoodBoil,
	...PillySteak,
	...SideOrder,
	...Wing,
].map((item, id) => {
	return {
		id,
		name: item.name,
		price: item.price,
	};
});

// Key as Category, Value as Item
export const CategoresItems = {
	Sandwich,
	Wing,
	Hamburger,
	Salad,
	Shrimp,
	Fish,
	'Side Order': SideOrder,
	'Pilly Steak': PillySteak,
	'Seedfood Boil': SeedfoodBoil,
	'Chicken Tender': ChickenTender,
	'Fried Rice': FriedRice,
};
