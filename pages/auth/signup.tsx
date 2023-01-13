import Form from '../../components/auth/form';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import type { AppRouter } from '../../server/routers/_app';
import superjson from 'superjson';
export default function Signup() {
	const client = createTRPCProxyClient<AppRouter>({
		transformer: superjson,
		links: [
			httpLink({
				url: 'http://localhost:3000/api/trpc',
			}),
		],
	});
	const handlerSubmit = async ({ email, password }) => {
		await client.user.create.mutate({
			email,
			password,
		});
	};
	return (
		<div>
			<Form handlerSubmit={handlerSubmit}></Form>
		</div>
	);
}
