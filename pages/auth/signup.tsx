import Form from '../../components/auth/form';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import type { AppRouter } from '../../server/routers/_app';
import superjson from 'superjson';
export default function Signup() {
	const client = createTRPCProxyClient<AppRouter>({
		transformer: superjson,
		links: [
			httpLink({
				url: '/api/trpc',
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
			<Form type={'signup'} handlerSubmit={handlerSubmit}></Form>
		</div>
	);
}
