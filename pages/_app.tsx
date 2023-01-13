import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from '@nextui-org/react';
import Layout from '../components/Layout';
import './global.css';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ItemsProvider from '../contexts/itemsContext';
import CategoryProvider from '../contexts/categoryContext';
import { trpc } from '../utils/trpc';
import { SSRProvider } from '@react-aria/ssr';
import { SessionProvider } from 'next-auth/react';
import { getSession } from 'next-auth/react';
const App = ({ Component, pageProps }: AppProps) => {
	const [session, setSession] = useState(null);
	const darkTheme = createTheme({
		type: 'dark',
	});
	useEffect(() => {
		const fetchSession = async () => {
			const session = await getSession();
			setSession(session);
		};
		const handleRouteStart = () => {
			fetchSession();
			NProgress.start();
		};
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
		<SSRProvider>
			<NextUIProvider theme={darkTheme}>
				<ItemsProvider>
					<CategoryProvider>
						<SessionProvider session={session}>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</SessionProvider>
					</CategoryProvider>
				</ItemsProvider>
			</NextUIProvider>
		</SSRProvider>
	);
};

export default trpc.withTRPC(App);
