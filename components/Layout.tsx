import React, { ReactNode } from 'react';
import MoblieNavbar from './mobileNavbar/mobileNavbar';
import { Spacer } from '@nextui-org/react';
import Notification from './Notification';
import NotificationProvider from '../contexts/notification';
import HeaderNav from './HeaderNav';
import CartSectionProvider from '../contexts/cartSectionContext';
import ModalContainer from './ModalContainer';
import ModalContainerProvider from '../contexts/modalContainerContext';
import ItemModalContainerProvider from '../contexts/itemModalContext';
import ItemModalContainer from './ItemModalContainer';
type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<ItemModalContainerProvider>
				<ModalContainerProvider>
					<NotificationProvider>
						<CartSectionProvider>
							<ItemModalContainer></ItemModalContainer>
							<ModalContainer></ModalContainer>
							<HeaderNav></HeaderNav>
							<Notification></Notification>
							{children}
							<Spacer y={3}></Spacer>
							<MoblieNavbar></MoblieNavbar>
						</CartSectionProvider>
					</NotificationProvider>
				</ModalContainerProvider>
			</ItemModalContainerProvider>
		</div>
	);
};

export default Layout;
