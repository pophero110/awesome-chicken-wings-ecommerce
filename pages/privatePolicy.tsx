export default function PrivatePolicy() {
	const lists = [
		{
			title: 'PRIVACY POLICY',
			description:
				'At Awesome Chicken, we are committed to protecting your privacy and the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your personal information. By accessing or using our website or services, you agree to this Privacy Policy.',
		},
		{
			title: 'COLLECTION OF PERSONAL INFORMATION',
			description:
				'We collect personal information from you when you create an account, place an order, or otherwise interact with our website or services. This information may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.',
		},
		{
			title: 'USE OF PERSONAL INFORMATION',
			description:
				'We use your personal information to process and fulfill your orders, provide customer service, send you promotional materials and updates, improve our products and services, and for other purposes as described in this Privacy Policy.',
		},
		{
			title: 'STORAGE AND PROTECTION OF PERSONAL INFORMATION',
			description:
				'We store your personal information on secure servers and take appropriate technical and organizational measures to protect it from unauthorized access, use, or disclosure. However, no data transmission or storage can be guaranteed to be 100% secure, so we cannot guarantee the absolute security of your information.',
		},
		{
			title: 'DISCLOSURE OF PERSONAL INFORMATION',
			description:
				'We do not sell, rent, or otherwise share your personal information with third parties, except as required by law or as described in this Privacy Policy. We may share your information with service providers that help us with our business operations, such as payment processors or shipping companies, but these service providers are not allowed to use your information for any other purpose.',
		},
		{
			title: 'ACCESSING AND UPDATING YOUR INFORMATION',
			description:
				'You have the right to access, review, and update your personal information at any time. You can do this by logging into your account on our website or contacting us at jiajin.webdeveloper@gmail.com.',
		},
		{
			title: 'CHANGES TO THIS PRIVACY POLICY',
			description:
				'We may update this Privacy Policy from time to time, so please review it periodically. If we make material changes to this Privacy Policy, we will notify you by posting a notice on our website or sending you an email.',
		},
		{
			title: 'QUESTIONS AND CONCERNS',
			description:
				'If you have any questions or concerns about our Privacy Policy, please contact us at jiajin.webdeveloper@gmail.com.',
		},
	];
	const end = 'This Privacy Policy is effective as of 01/01/2023.';
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '5rem',
				fontFamily: 'var(--primary-font)',
			}}>
			{lists.map((list, index) => {
				return (
					<>
						<Title key={index} text={list.title}></Title>
						<Description
							key={index}
							text={list.description}></Description>
					</>
				);
			})}
			<div
				style={{
					textAlign: 'end',
					fontFamily: 'var(--primary-font)',
				}}>
				{end}
			</div>
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
