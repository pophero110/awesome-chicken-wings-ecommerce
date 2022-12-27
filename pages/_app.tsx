import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';
import Layout from '../components/Layout';
import './global.css';
import Router from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ItemsProvider from '../contexts/itemsContext';

const App = ({ Component, pageProps }: AppProps) => {
	const darkTheme = createTheme({
		type: 'dark',
	});

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);
	return (
		<NextUIProvider theme={darkTheme}>
			<Layout>
				<ItemsProvider>
					<Component {...pageProps} />
				</ItemsProvider>
			</Layout>
		</NextUIProvider>
	);
};

export default App;
