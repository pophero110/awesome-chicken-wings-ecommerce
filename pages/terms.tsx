export default function Terms() {
	const termsAndConditions = [
		{
			title: 'Orders and Payment',
			description:
				'You can place an order on our website by adding items to your cart and proceeding to checkout. We accept major credit cards and other payment methods as indicated on our website. You agree to pay the price of the items you order, as well as any applicable taxes and shipping fees.',
		},
		// {
		// 	title: 'Delivery and Shipping',
		// 	description:
		// 		'We aim to deliver your order as soon as possible, subject to availability and any delays caused by factors beyond our control. We will provide you with an estimated delivery time when you place your order, but this time is not guaranteed. You are responsible for providing accurate delivery information and for ensuring that someone is available to receive the delivery at the specified address.',
		// },
		{
			title: 'Returns and Refunds',
			description:
				'If you are not satisfied with your order, please contact us within 1 day to request a return or refund. We will evaluate each request on a case-by-case basis and may require you to provide evidence of the issue. If we approve your request, we will provide you with instructions for returning the item and processing the refund.',
		},
		{
			title: 'Limitation of Liability',
			description:
				'To the fullest extent allowed by law, we will not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with these terms or the use of our website or services, even if we have been advised of the possibility of such damages. Our liability for any direct damages will be limited to the amount you paid for the items you ordered.',
		},
		{
			title: 'Intellectual Property',
			description:
				'The content of our website, including trademarks, logos, images, and text, is protected by copyright and other intellectual property laws. You may not use or reproduce any of this content without our prior written consent.',
		},
		{
			title: 'Changes to These Terms',
			description:
				'We may modify these Terms and Conditions from time to time, so please review them periodically. If we make material changes to these Terms, we will notify you by posting a notice on our website or sending you an email. Your continued use of our website or services after any changes to these Terms means that you accept the new terms.',
		},
		{
			title: 'Governing Law',
			description:
				'These Terms and Conditions will be governed by and construed in accordance with the laws of the United State.',
		},
		{
			title: 'Questions and Concerns',
			description:
				'If you have any questions or concerns about these Terms and Conditions, please contact us at jiajin.webdeveloper@gmail.com.',
		},
	];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '5rem',
				fontFamily: 'var(--primary-font)',
			}}>
			{termsAndConditions.map((list, index) => {
				return (
					<>
						<Title key={index} text={list.title}></Title>
						<Description
							key={index}
							text={list.description}></Description>
					</>
				);
			})}
		</div>
	);
}

const Title = ({ text }) => {
	return (
		<div
			style={{
				fontWeight: '700',
				marginBottom: '1rem',
			}}>
			{text}
		</div>
	);
};

const Description = ({ text }) => {
	return (
		<div
			style={{
				marginBottom: '1rem',
			}}>
			{text}
		</div>
	);
};
