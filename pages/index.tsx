import { GetServerSideProps } from 'next';
import prisma from '../lib/prisma';
import { CategoryType } from '../components/index/category';
import CategoryList from '../components/index/categoryList';
import { Container, Spacer } from '@nextui-org/react';
import { useEffect } from 'react';
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
	useEffect(() => {
		const hello = async () => {
			await fetch('/api/trpc/hello', {
				method: 'GET',
			}).then(async (res) => {
				console.log(await res.json());
				return res;
			});
		};
		hello();
	}, []);
	return (
		<Container>
			<Spacer></Spacer>
			<CategoryList categories={categories}></CategoryList>
		</Container>
	);
};

export default Index;
