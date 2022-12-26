import React, { ReactNode } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
	return (
		<>
			{props.children}
			<MoblieNavbar></MoblieNavbar>
		</>
	);
};

export default Layout;
