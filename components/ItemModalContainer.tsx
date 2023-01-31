import { Modal } from '@nextui-org/react';
import Item from './menu/item';
import {
	useItemModalContainer,
	useSetItemModalContainer,
} from '../contexts/itemModalContext';

import { useEffect, useState } from 'react';
export default function ItemModalContainer() {
	const { itemModalContainer } = useItemModalContainer();
	const { setItemModalContainer } = useSetItemModalContainer();
	const closeHandler = () => {
		setItemModalContainer({
			visible: false,
			item: {
				id: '',
				name: '',
				price: 0,
			},
		});
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
			css={{
				color: 'white',
			}}
			closeButton
			fullScreen={isFullScreen}
			aria-labelledby='modal-title'
			open={itemModalContainer.visible}
			// open={true}
			onClose={closeHandler}>
			<Modal.Body
				css={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '1rem',
				}}>
				<Item
					id={itemModalContainer.item.id}
					name={itemModalContainer.item.name}
					price={itemModalContainer.item.price}></Item>
			</Modal.Body>
		</Modal>
	);
}
