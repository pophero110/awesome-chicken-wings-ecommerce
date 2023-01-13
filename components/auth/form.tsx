import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
export default function Form({ handleSubmit, type, error, setError }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const submitHandler = async () => {
		if (passValidate()) {
			await handleSubmit({ email, password });
		}
	};
	const passValidate = () => {
		let error = '';
		const emailRegex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (type == 'signup' && confirmPassword !== password) {
			error = 'Password does not match';
		}
		if (!email.match(emailRegex)) {
			error = 'Please check your email format';
		}
		if (error) {
			setError(error);
			return false;
		}
		return true;
	};
	return (
		<Container gap={2}>
			<Spacer y={2}></Spacer>
			<Input
				clearable
				width='100%'
				aria-label='Email'
				value={email}
				bordered
				color='primary'
				labelPlaceholder='Email'
				onChange={(e) => setEmail(e.target.value)}></Input>
			<Spacer y={2}></Spacer>
			<Input.Password
				clearable
				width='100%'
				aria-label='Password'
				bordered
				color='primary'
				labelPlaceholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}></Input.Password>

			{type == 'signin' ? null : (
				<>
					<Spacer y={2}></Spacer>
					<Input.Password
						clearable
						width='100%'
						aria-label='Confirm Password'
						bordered
						color='primary'
						labelPlaceholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) =>
							setConfirmPassword(e.target.value)
						}></Input.Password>
				</>
			)}
			<Spacer y={1}></Spacer>
			{error ? (
				<>
					<Text
						b
						css={{
							textGradient:
								'45deg, $yellow600 -20%, $red600 100%',
						}}>
						{error}
					</Text>
					<Spacer y={1}></Spacer>
				</>
			) : null}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Button onPress={submitHandler}>
					{type == 'signin' ? 'Sign in' : 'Sign up'}
				</Button>
				{type == 'signin' ? (
					<Link href='/auth/signup'>
						<a>Sign up</a>
					</Link>
				) : null}
			</div>
		</Container>
	);
}
