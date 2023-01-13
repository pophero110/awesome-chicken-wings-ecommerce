import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
export default function Form({ handleSubmit, type, error }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const submitHandler = async () => {
		await handleSubmit({ email, password });
	};
	return (
		<Container gap={2}>
			<Text>Email</Text>
			<Input
				width='100%'
				aria-label='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}></Input>
			<Text>Password</Text>
			<Input
				width='100%'
				aria-label='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}></Input>
			{type == 'signin' ? null : (
				<>
					<Text>Confirm Password</Text>
					<Input width='100%' aria-label='Confirm Password'></Input>
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
