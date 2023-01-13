import { Card, Col, Text } from '@nextui-org/react';
import { useSetCategory } from '../../contexts/categoryContext';
import { useRouter } from 'next/router';
export type CategoryType = {
	name: string;
	id: number;
};

type CategoryProps = {
	category: CategoryType;
};
const Category: React.FC<CategoryProps> = ({ category }) => {
	const { setActiveCategory } = useSetCategory();
	const route = useRouter();
	const clickHandler = () => {
		setActiveCategory({
			name: category.name,
			id: category.id,
		});
		route.push('/menu', undefined, { shallow: true });
	};
	return (
		<Card isPressable isHoverable onPress={() => clickHandler()}>
			<Card.Header
				css={{
					position: 'absolute',
					zIndex: 1,
					top: 0,
					padding: '10px',
				}}>
				<Col>
					<Text color='white'>{category.name}</Text>
				</Col>
			</Card.Header>
			<Card.Image
				src='https://nextui.org/images/fruit-1.jpeg'
				objectFit='cover'
				width='100%'
				height={150}
				alt='Card image background'
			/>
		</Card>
	);
};

export default Category;
