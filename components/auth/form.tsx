import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';
export default function Form({ handleSubmit, type }) {
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
			<Button onPress={submitHandler}>
				{type == 'signin' ? 'Sign in' : 'Sign up'}
			</Button>
		</Container>
	);
}
