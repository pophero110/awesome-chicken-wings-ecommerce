import { Modal } from '@nextui-org/react';
import AuthForm from './auth/authForm';
import {
	useModalContainer,
	useSetModalContainer,
} from '../contexts/modalContainerContext';
import { useEffect, useState } from 'react';
export default function ModalContainer() {
	const { modalContainer } = useModalContainer();
	const { setModalContainer } = useSetModalContainer();
	const closeHandler = () => {
		setModalContainer({ visible: false, type: 'signin' });
	};
	const [isFullScreen, setFullScreen] = useState(false);
	useEffect(() => {
		const media = window.matchMedia('(max-width: 700px)');
		const handleFullScreen = () => {
			if (media.matches) {
				setFullScreen(true);
			} else {
				setFullScreen(false);
			}
		};
		media.addEventListener('change', handleFullScreen);
		handleFullScreen();
		return () => {
			media.removeEventListener('change', handleFullScreen);
		};
	}, []);

	return (
		<Modal
			closeButton
			fullScreen={isFullScreen}
			aria-labelledby='modal-title'
			open={modalContainer.visible}
			onClose={closeHandler}>
			<Modal.Body
				css={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<AuthForm></AuthForm>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
