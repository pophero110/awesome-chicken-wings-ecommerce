import Form from '../../components/auth/form';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import type { AppRouter } from '../../server/routers/_app';
import superjson from 'superjson';
import { useState } from 'react';
import { useSetNotification } from '../../contexts/notification';
import Router from 'next/router';
export default function Signup() {
	const router = Router;
	const { setNotification } = useSetNotification();
	const [error, setError] = useState('');
	const client = createTRPCProxyClient<AppRouter>({
		transformer: superjson,
		links: [
			httpLink({
				url: '/api/trpc',
			}),
		],
	});
	const handleSubmit = async ({ email, password }) => {
		const result = await client.user.create.mutate({
			email,
			password,
		});
		if (result.ok) {
			router.push('/', undefined, { shallow: true });
			setNotification('Sign up successfully');
		} else {
			setError('Something went wong');
		}
	};
	return (
		<div>
			<Form
				setError={setError}
				error={error}
				type={'signup'}
				handleSubmit={handleSubmit}></Form>
		</div>
	);
}
