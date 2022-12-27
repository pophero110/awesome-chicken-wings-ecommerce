import { itemInitialState, itemReducer } from '../reducers/itemReducer';
import { useReducer, createContext, ReactNode, useContext } from 'react';

interface ItemCtxDispatch {
	itemDispatch: React.Dispatch<any>;
}
interface ItemCtx {
	itemState: {};
}
export const ItemsContext = createContext<ItemCtx | null>(null);
export const ItemsDispatchContext = createContext<ItemCtxDispatch | null>(null);

type Props = {
	children: ReactNode;
};
const ItemsProvider: React.FC<Props> = ({ children }) => {
	const [itemState, itemDispatch] = useReducer(itemReducer, itemInitialState);

	return (
		<ItemsContext.Provider value={{ itemState }}>
			<ItemsDispatchContext.Provider value={{ itemDispatch }}>
				{children}
			</ItemsDispatchContext.Provider>
		</ItemsContext.Provider>
	);
};

export default ItemsProvider;

export const useItems = () => {
	return useContext(ItemsContext);
};

export const useItemDispatch = () => {
	return useContext(ItemsDispatchContext);
};
