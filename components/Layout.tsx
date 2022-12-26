import React, { ReactNode } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
	<div>
		<div className='layout'>{props.children}</div>
		<MoblieNavbar></MoblieNavbar>
	</div>
);

export default Layout;
