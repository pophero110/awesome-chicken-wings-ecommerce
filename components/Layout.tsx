import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';
import { Spacer } from '@nextui-org/react';
import Notification from './Notification';
import NotificationProvider from '../contexts/notification';
import HeaderNav from './HeaderNav';
type Props = {
	children: ReactNode;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
	darkMode: boolean;
};

const Layout: React.FC<Props> = ({ children, darkMode, setDarkMode }) => {
	return (
		<div>
			<NotificationProvider>
				<HeaderNav
					setDarkMode={setDarkMode}
					darkMode={darkMode}></HeaderNav>
				<Notification></Notification>
				{children}
				<Spacer y={4}></Spacer>
				<MoblieNavbar></MoblieNavbar>
			</NotificationProvider>
		</div>
	);
};

export default Layout;
