import { Button, Container, Spacer } from '@nextui-org/react';
import OrderList from '../components/profile/orderList';
import { useEffect, useState } from 'react';
import { useSetModalContainer } from '../contexts/modalContainerContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useSetNotification } from '../contexts/notification';
export default function Profile() {
	const [orders, setOrders] = useState([]);
	const session = useSession();
	const router = useRouter();
	const { setNotification } = useSetNotification();
	const { setModalContainer } = useSetModalContainer();
	useEffect(() => {
		const fetchOrder = async () => {
			const requestOptions = {
				method: 'GET',
			};
			await fetch('/api/orders', requestOptions)
				.then((response) => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response;
				})
				.then(async (response) => {
					const { orders } = await response.json();
					console.log(orders);
					setOrders(orders);
				})
				.catch((error) => {
					// TODO
					// show error to customer
					// log error for debugging
					console.log(error);
				});
		};
		if (session.status === 'authenticated') {
			fetchOrder();
		}
	}, [session.status]);
	if (session.status === 'authenticated') {
		return (
			<Container
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: '',
				}}>
				<OrderList orders={orders}></OrderList>
				<Button
					onPress={() => {
						signOut({ redirect: false });
						setNotification('Sign out successfully');
					}}>
					Sign Out
				</Button>
			</Container>
		);
	} else {
		return (
			<div
				style={{
					display: 'flex',
					padding: '2rem',
					flexDirection: 'column',
					height: '100vh',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Button
					onPress={() =>
						setModalContainer({ visible: true, type: 'signin' })
					}>
					Sign in
				</Button>
				<Spacer y={1}></Spacer>
				<Button
					onPress={() =>
						setModalContainer({ visible: true, type: 'signup' })
					}>
					Sign up
				</Button>
			</div>
		);
	}
}
