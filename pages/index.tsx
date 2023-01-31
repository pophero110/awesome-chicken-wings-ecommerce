import { GetServerSideProps } from 'next';
import prisma from '../lib/prisma';
import { CategoryType } from '../components/index/category';
import CategoryList from '../components/index/categoryList';
import { Container } from '@nextui-org/react';
import HeroSection from '../components/index/heroSection';
export const getServerSideProps: GetServerSideProps = async () => {
	const categories = await prisma.category.findMany({
		select: {
			id: true,
			name: true,
		},
	});

	return {
		props: {
			categories: JSON.parse(JSON.stringify(categories)),
		},
	};
};
type IndexProps = {
	categories: CategoryType[];
};

const Index: React.FC<IndexProps> = ({ categories }) => {
	return (
		<>
			{/* <HeroSection></HeroSection> */}
			<Container
				css={{
					marginTop: '1rem',
					maxWidth: '80%',
				}}>
				<CategoryList categories={categories}></CategoryList>
			</Container>
		</>
	);
};

export default Index;
