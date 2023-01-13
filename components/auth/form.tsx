import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
export default function Form() {
	const signupHandler = () => {
		console.log('click');
	};
	return (
		<Container gap={2}>
			<Text>Email</Text>
			<Input width='100%' aria-label='Email'></Input>
			<Text>Password</Text>
			<Input width='100%' aria-label='Password'></Input>
			<Text>Confirm Password</Text>
			<Input width='100%' aria-label='Confirm Password'></Input>
			<Spacer y={1}></Spacer>
			<Button onPress={signupHandler}>Sign up</Button>
		</Container>
	);
}
