import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					{CssBaseline.flush()}
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'></link>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin=''></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'></link>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'></meta>
				</Head>
				<script src='https://js.stripe.com/v3/' async></script>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
