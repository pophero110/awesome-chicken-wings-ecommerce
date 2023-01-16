import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
import { useCategory } from '../../contexts/categoryContext';
import { Container } from '@nextui-org/react';
type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	const { activeCategory } = useCategory();
	return (
		<Container
			className='categoryNav'
			css={{
				borderBottom: '2px solid #2B2F31',
				padding: '0 2px 0 0',
				'@smMax': {
					paddingLeft: '20px',
					paddingRight: '14px',
				},
			}}>
			<Slider scrollTo={activeCategory.id}>
				{categories.map((category) => {
					return (
						<Category
							name={category.name}
							key={category.id}
							id={category.id}
							items={[]}></Category>
					);
				})}
			</Slider>
		</Container>
	);
};

export default CategroyNav;
