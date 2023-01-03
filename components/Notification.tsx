import { InfoCircle } from 'react-iconly';
import { Text } from '@nextui-org/react';
import { useNotification, useSetNotification } from '../contexts/notification';
import style from './Notification.module.css';
import { useEffect } from 'react';
const Notification = () => {
	const { notification } = useNotification();
	const { setNotification } = useSetNotification();
	useEffect(() => {
		const timeout = setTimeout(() => {
			setNotification('');
		}, 3000);

		return () => {
			console.log('noti3');
			clearTimeout(timeout);
		};
	}, [notification]);
	const message = notification ? (
		<div
			className={style.notification_container}
			style={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				zIndex: '100',
				left: '50%',
				backgroundColor: '#17C964',
				borderRadius: '4px',
				padding: 'var(--ui-padding)',
				whiteSpace: 'nowrap',
				textAlign: 'center',
			}}>
			<InfoCircle set='bold' />
			<Text b>{notification}</Text>
		</div>
	) : null;
	return message;
};

export default Notification;
