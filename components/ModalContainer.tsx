import { Modal } from '@nextui-org/react';
import AuthForm from './auth/authForm';
import {
	useModalContainer,
	useSetModalContainer,
} from '../contexts/modalContainerContext';
export default function ModalContainer() {
	const { modalContainer } = useModalContainer();
	const { setModalContainer } = useSetModalContainer();
	const closeHandler = () => {
		setModalContainer({ visible: false, type: 'signin' });
	};
	return (
		<Modal
			closeButton
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
