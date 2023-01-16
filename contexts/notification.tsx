import {
	useState,
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface SetNotificationCtx {
	setNotification: Dispatch<SetStateAction<{}>>;
}
interface NotificationCtx {
	notification: string;
}
export const NotificationCtx = createContext<NotificationCtx | null>(null);
export const SetNotificationCtx = createContext<SetNotificationCtx | null>(
	null
);

type Props = {
	children: ReactNode;
};
const NotificationProvider: React.FC<Props> = ({ children }) => {
	const [notification, setNotification] = useState('');

	return (
		<NotificationCtx.Provider value={{ notification }}>
			<SetNotificationCtx.Provider value={{ setNotification }}>
				{children}
			</SetNotificationCtx.Provider>
		</NotificationCtx.Provider>
	);
};

export default NotificationProvider;

export const useNotification = () => {
	return useContext(NotificationCtx);
};

export const useSetNotification = () => {
	return useContext(SetNotificationCtx);
};
