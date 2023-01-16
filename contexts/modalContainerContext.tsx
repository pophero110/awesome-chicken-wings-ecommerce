import {
	useState,
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface SetModalContainerCtx {
	setModalContainer: Dispatch<SetStateAction<{}>>;
}
interface ModalContainerCtx {
	modalContainer: { visible: boolean; type: string };
}
export const ModalContainerCtx = createContext<ModalContainerCtx | null>(null);
export const SetModalContainerCtx = createContext<SetModalContainerCtx | null>(
	null
);

type Props = {
	children: ReactNode;
};
const ModalContainerProvider: React.FC<Props> = ({ children }) => {
	const [modalContainer, setModalContainer] = useState({
		visible: false,
		type: 'signin',
	});

	return (
		<ModalContainerCtx.Provider value={{ modalContainer }}>
			<SetModalContainerCtx.Provider value={{ setModalContainer }}>
				{children}
			</SetModalContainerCtx.Provider>
		</ModalContainerCtx.Provider>
	);
};

export default ModalContainerProvider;

export const useModalContainer = () => {
	return useContext(ModalContainerCtx);
};

export const useSetModalContainer = () => {
	return useContext(SetModalContainerCtx);
};
