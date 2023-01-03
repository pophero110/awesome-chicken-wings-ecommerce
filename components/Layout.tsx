import React, { ReactNode } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';
import { Spacer } from '@nextui-org/react';
import Notification from './Notification';
import NotificationProvider from '../contexts/notification';
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<NotificationProvider>
				<Notification></Notification>
				{children}
				<Spacer y={4}></Spacer>
				<MoblieNavbar></MoblieNavbar>
			</NotificationProvider>
		</>
	);
};

export default Layout;
