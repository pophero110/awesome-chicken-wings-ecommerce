import ItemList from '../components/menu/itemList';
import CategroyNav from '../components/menu/categoryNav';
import { CategoryProps } from '../components/menu/category';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { Row, Col } from '@nextui-org/react';
import { useCategory } from '../contexts/categoryContext';
import CartSection from '../components/CartSection';
import { useSetCartSection } from '../contexts/cartSectionContext';
export const getStaticProps: GetStaticProps = async () => {
	const items = await prisma.item.findMany();
	const mapItemsById = items.reduce((acc, { id, name, price }) => {
		return { ...acc, ...{ [id]: { name, price } } };
	}, {});
	const categories = await prisma.category.findMany({
		include: { items: { include: { item: true } } },
	});
	const mapCategories = categories.map((category) => {
		return {
			id: category.id,
			name: category.name,
			items: category.items.map((item) => {
				return {
					id: item.item.id,
					name: item.item.name,
					price: item.item.price,
				};
			}),
		};
	});
	return {
		props: {
			categories: JSON.parse(JSON.stringify(mapCategories)),
			mapItemsById: JSON.parse(JSON.stringify(mapItemsById)),
		},
	};
};

type MenuProps = {
	categories: CategoryProps[];
	mapItemsById: [];
};

const Menu: React.FC<MenuProps> = ({ categories, mapItemsById }) => {
	const { activeCategory } = useCategory();
	const items = categories.filter(
		(category) => category.name === activeCategory.name
	)[0].items;
	const { setCartSection } = useSetCartSection();
	const closeCartHandler = () => {
		setCartSection(false);
	};
	return (
		<div
			onClick={() => closeCartHandler()}
			style={{
				height: '100vh',
			}}>
			<Row
				css={{
					paddingLeft: '5px',
				}}>
				<Col
					css={{
						'@mdMin': {
							width: 'calc(100vw - 370px)',
						},
					}}>
					<CategroyNav categories={categories}></CategroyNav>
					<ItemList items={items}></ItemList>
				</Col>
				<CartSection
					onCheckout={false}
					mapItemsById={mapItemsById}></CartSection>
			</Row>
		</div>
	);
};

export default Menu;
