import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { destroyCookie } from 'nookies';
export default function CheckoutForm({
	clientSecret,
	total,
	setCheckoutModeHandler,
}) {
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
			destroyCookie(null, 'clientSecret');
			setProcessing(false);
			setSucceeded(true);
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
				<span id='button-text'>Pay ${total}</span>
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
