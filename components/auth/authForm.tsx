import Form from './form';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useSetNotification } from '../../contexts/notification';
import {
	useModalContainer,
	useSetModalContainer,
} from '../../contexts/modalContainerContext';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import { AppRouter } from '../../server/routers/_app';
import superjson from 'superjson';
export default function AuthForm() {
	const { modalContainer } = useModalContainer();
	const { setModalContainer } = useSetModalContainer();
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
	const handleSigninSubmit = async ({ email, password }) => {
		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		if (result.ok) {
			setModalContainer({ visible: false, type: '' });
			setError('Sign in succesfully');
		} else {
			setError('Something wrong with your credentials');
		}
	};
	const handleSignupSubmit = async ({ email, password }) => {
		const result = await client.user.create.mutate({
			email,
			password,
		});
		if (result.error) {
			setError(result.error);
		} else {
			setError('Sign up successfully');
			setModalContainer({ visible: true, type: 'signin' });
		}
	};
	return (
		<div>
			<Form
				error={error}
				setError={setError}
				type={modalContainer.type}
				handleSubmit={
					modalContainer.type === 'signin'
						? handleSigninSubmit
						: handleSignupSubmit
				}></Form>
		</div>
	);
}
