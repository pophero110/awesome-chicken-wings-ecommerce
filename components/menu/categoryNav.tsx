import Category, { CategoryProps } from './category';
import Slider from '../shared/slider/slider';
import { useCategory } from '../../contexts/categoryContext';
type CategroyNavProps = {
	categories: CategoryProps[];
};
const CategroyNav: React.FC<CategroyNavProps> = ({ categories }) => {
	const { activeCategory } = useCategory();
	return (
		<div className='categoryNav'>
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
		</div>
	);
};

export default CategroyNav;
