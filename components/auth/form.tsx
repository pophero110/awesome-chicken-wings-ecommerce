import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Form({ handlerSubmit }) {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const signupHandler = () => {
		handlerSubmit({ email, password });
		router.push('/');
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
			<Text>Confirm Password</Text>
			<Input width='100%' aria-label='Confirm Password'></Input>
			<Spacer y={1}></Spacer>
			<Button onPress={signupHandler}>Sign up</Button>
		</Container>
	);
}
