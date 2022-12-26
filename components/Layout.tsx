import React, { ReactNode } from 'react';
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = (props) => <div>{props.children}</div>;

export default Layout;
