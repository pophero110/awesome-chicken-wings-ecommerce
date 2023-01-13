import Form from '../../components/auth/form';
import { getCsrfToken } from 'next-auth/react';
export default function Signin({ csrfToken }) {
	const handlerSubmit = async ({ email, password }) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				password,
				csrfToken,
			}),
		};
		const res = await fetch(
			'/api/auth/callback/credentials',
			requestOptions
		).then(async (res) => {
			return await res;
		});
	};
	return (
		<div>
			<Form type={'signin'} handlerSubmit={handlerSubmit}></Form>
		</div>
	);
}
export async function getServerSideProps(context) {
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}
