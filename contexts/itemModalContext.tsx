import {
	useState,
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface SetItemModalContainerCtx {
	setItemModalContainer: Dispatch<SetStateAction<{}>>;
}
interface ItemModalContainerCtx {
	itemModalContainer: {
		visible: boolean;
		item: { id: string; price: number; name: string };
	};
}
export const ItemModalContainerCtx =
	createContext<ItemModalContainerCtx | null>(null);
export const SetItemModalContainerCtx =
	createContext<SetItemModalContainerCtx | null>(null);

type Props = {
	children: ReactNode;
};
const ItemModalContainerProvider: React.FC<Props> = ({ children }) => {
	const [itemModalContainer, setItemModalContainer] = useState({
		visible: false,
		item: {
			id: '',
			name: '',
			price: 0,
		},
	});

	return (
		<ItemModalContainerCtx.Provider value={{ itemModalContainer }}>
			<SetItemModalContainerCtx.Provider
				value={{ setItemModalContainer }}>
				{children}
			</SetItemModalContainerCtx.Provider>
		</ItemModalContainerCtx.Provider>
	);
};

export default ItemModalContainerProvider;

export const useItemModalContainer = () => {
	return useContext(ItemModalContainerCtx);
};

export const useSetItemModalContainer = () => {
	return useContext(SetItemModalContainerCtx);
};
