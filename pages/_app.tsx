import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';
import Layout from '../components/Layout';
import './global.css';
const App = ({ Component, pageProps }: AppProps) => {
	const darkTheme = createTheme({
		type: 'dark',
	});
	return (
		<NextUIProvider theme={darkTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	);
};

export default App;
