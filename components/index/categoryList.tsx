import { Grid } from '@nextui-org/react';
import { CategoryType } from './category';
import Category from './category';
type CategoryListProps = {
	categories: CategoryType[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
	return (
		<Grid.Container gap={1} id={'categoryList'}>
			{categories.map((category) => {
				return (
					<Grid xs={6} key={category.id}>
						<Category category={category}></Category>
					</Grid>
				);
			})}
		</Grid.Container>
	);
};

export default CategoryList;
