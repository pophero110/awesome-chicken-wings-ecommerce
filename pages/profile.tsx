import { Container } from '@nextui-org/react';
import OrderList from '../components/profile/orderList';
import prisma from '../lib/prisma';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
export const getServerSideProps = async (ctx) => {
	const session = await unstable_getServerSession(
		ctx.req,
		ctx.res,
		authOptions
	);
	const user = await prisma.user.findUnique({
		where: {
			email: session.user.email,
		},
		include: { order: true },
	});

	return {
		props: {
			orders: JSON.parse(JSON.stringify(user.order)),
			session: JSON.parse(JSON.stringify(session)),
		},
	};
};
export default function Profile({ orders, session }) {
	if (!session) {
		return (
			<>
				<h1
					style={{
						textAlign: 'center',
					}}>
					404
				</h1>
				<p
					style={{
						textAlign: 'center',
					}}>
					You need to sign in first.
				</p>
			</>
		);
	}
	return (
		<Container>
			<OrderList orders={orders}></OrderList>
		</Container>
	);
}
