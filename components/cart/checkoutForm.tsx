import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { destroyCookie } from 'nookies';
import { useItemDispatch } from '../../contexts/itemsContext';
import { Loading, Text } from '@nextui-org/react';
export default function CheckoutForm({
	clientSecret,
	total,
	setCheckoutModeHandler,
}) {
	const { itemDispatch } = useItemDispatch();
	const router = useRouter();
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const stripe = useStripe();
	const elements = useElements();

	const cardStyle = {
		style: {
			base: {
				color: 'white',
				fontFamily: 'Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				iconColor: 'white',
				'::placeholder': {
					color: '#697177',
				},
			},
			invalid: {
				fontFamily: 'Arial, sans-serif',
				color: '#F31260',
				iconColor: '#F31260',
			},
		},
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setProcessing(false);
			setSucceeded(true);
			destroyCookie(null, 'clientSecret');
			destroyCookie(null, 'paymentIntentId');
			itemDispatch({ type: 'clearItems' });
			router.push('/');
		}
	};
	return (
		<form id='payment-form' onSubmit={handleSubmit}>
			<CardElement
				id='card-element'
				options={cardStyle}
				onChange={handleChange}
			/>
			<button
				onClick={setCheckoutModeHandler}
				disabled={processing || disabled || succeeded}
				id='submit'
				style={{
					marginTop: '1.5rem',
					backgroundColor: 'var(--nextui-colors-blue600)',
					borderRadius: '14px',
					width: '100%',
					display: 'block',
					border: 'none',
					textAlign: 'center',
					padding: '0.7rem',
				}}>
				{processing ? (
					<Loading color='white' type='spinner' size='lg' />
				) : (
					<Text id='button-text'>Pay ${total}</Text>
				)}
			</button>
			{error && (
				<p className='card-error' role='alert'>
					{error}
				</p>
			)}
			{succeeded && <p>Payment succeeded</p>}
		</form>
	);
}
