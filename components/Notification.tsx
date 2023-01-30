import { InfoCircle } from 'react-iconly';
import { Text } from '@nextui-org/react';
import { useEffect } from 'react';
import { useNotification, useSetNotification } from '../contexts/notification';
import style from './Notification.module.css';
const Notification = () => {
	const { notification } = useNotification();
	const { setNotification } = useSetNotification();
	useEffect(() => {
		const resetNotification = setTimeout(() => {
			setNotification('');
		}, 3000);

		return () => {
			clearTimeout(resetNotification);
		};
	}, [notification]);
	return (
		<div
			style={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				zIndex: '300',
				left: '50%',
				transform: 'translate(-50%, 1rem)',
				padding: 'var(--ui-padding)',
				whiteSpace: 'nowrap',
				textAlign: 'center',
			}}>
			{notification && (
				<div
					className={style.notification_container}
					style={{
						display: 'flex',
						backgroundColor: '#17C964',
						borderRadius: '5px',
						padding: '5px',
					}}>
					<InfoCircle set='bold' />
					<Text
						b
						css={{
							marginLeft: '0.3rem',
						}}>
						{notification}
					</Text>
				</div>
			)}
		</div>
	);
};

export default Notification;
