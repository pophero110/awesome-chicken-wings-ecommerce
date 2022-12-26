import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';
import MoblieNavbar from '../components/mobileNavbar/mobileNavbar';
const App = ({ Component, pageProps }: AppProps) => {
	const darkTheme = createTheme({
		type: 'dark',
	});
	return (
		<NextUIProvider theme={darkTheme}>
			<Component {...pageProps} />
			<MoblieNavbar></MoblieNavbar>
		</NextUIProvider>
	);
};

export default App;
