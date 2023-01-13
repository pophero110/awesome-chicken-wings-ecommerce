import Form from '../../components/auth/form';
import Router from 'next/router';
import { signIn } from 'next-auth/react';
export default function Signin() {
	const router = Router;
	const handleSubmit = async ({ email, password }) => {
		signIn('credentials', { redirect: false, email, password });
		//TODO redirect the page to where user start
		router.push('/');
	};
	return (
		<div>
			<Form type={'signin'} handleSubmit={handleSubmit}></Form>
		</div>
	);
}
