import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { Message, Lock } from 'react-iconly';
import { useSetModalContainer } from '../../contexts/modalContainerContext';
export default function Form({ handleSubmit, type, error, setError }) {
	const { setModalContainer } = useSetModalContainer();
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
		<Container
			gap={2}
			css={{
				'@smMin': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				},
			}}>
			<Spacer y={1}></Spacer>
			<Input
				clearable
				width='100%'
				aria-label='Email'
				value={email}
				bordered
				color='primary'
				labelPlaceholder='Email'
				contentLeft={<Message set='broken' primaryColor='white' />}
				onChange={(e) => setEmail(e.target.value)}></Input>
			<Spacer y={2}></Spacer>
			<Input.Password
				clearable
				width='100%'
				aria-label='Password'
				bordered
				color='primary'
				labelPlaceholder='Password'
				contentLeft={<Lock set='broken' primaryColor='white' />}
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
						contentLeft={<Lock set='broken' primaryColor='white' />}
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
			<Container
				css={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0',
					alignItems: 'center',
				}}>
				{type == 'signup' && (
					<Button
						size={'sm'}
						bordered={type == 'signup'}
						onPress={() => {
							setError('');
							setModalContainer({
								visible: true,
								type: 'signin',
							});
						}}>
						Sign in
					</Button>
				)}
				<Button
					shadow
					onPress={() => {
						setPassword('');
						setConfirmPassword('');
						submitHandler();
					}}
					size={'sm'}>
					{type == 'signin' ? 'Sign in' : 'Sign up'}
				</Button>
				{type == 'signin' && (
					<Button
						size={'sm'}
						bordered={type == 'signin'}
						onPress={() => {
							setError('');
							setModalContainer({
								visible: true,
								type: 'signup',
							});
						}}>
						Sign up
					</Button>
				)}
			</Container>
		</Container>
	);
}
