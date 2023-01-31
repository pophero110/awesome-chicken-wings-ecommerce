import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
import { useCategory } from '../../contexts/categoryContext';
import { Col } from '@nextui-org/react';
type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	const { activeCategory } = useCategory();
	return (
		<Col
			className='categoryNav'
			css={{
				padding: '0 2px 0 0',
				'@smMax': {
					margin: '0',
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
		</Col>
	);
};

export default CategroyNav;
