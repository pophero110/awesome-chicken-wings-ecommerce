import React, { ReactNode } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';
import { Spacer } from '@nextui-org/react';
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
	return (
		<>
			{props.children}
			<Spacer y={4}></Spacer>
			<MoblieNavbar></MoblieNavbar>
		</>
	);
};

export default Layout;
