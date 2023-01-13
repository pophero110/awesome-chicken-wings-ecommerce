import Form from '../../components/auth/form';
import Router from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useSetNotification } from '../../contexts/notification';
export default function Signin() {
	const { setNotification } = useSetNotification();
	const [error, setError] = useState('');
	const router = Router;
	const handleSubmit = async ({ email, password }) => {
		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		//TODO redirect the page to where user start
		//TODO shallow = true, update the path without rererunning
		//	getStaticProps, getServerSideProps or getInitialProps
		if (result.ok) {
			router.push('/', undefined, { shallow: true });
			setNotification('Sign in succesfully');
		} else {
			setError('Something wrong with your credentials');
		}
	};
	return (
		<div>
			<Form
				error={error}
				type={'signin'}
				handleSubmit={handleSubmit}></Form>
		</div>
	);
}
