import {
	useState,
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface SetCartSectionCtx {
	setCartSection: Dispatch<SetStateAction<{}>>;
}
interface CartSectionCtx {
	cartSection: { visible: boolean };
}
export const CartSectionCtx = createContext<CartSectionCtx | null>(null);
export const SetCartSectionCtx = createContext<SetCartSectionCtx | null>(null);

type Props = {
	children: ReactNode[];
};
const CartSectionProvider: React.FC<Props> = ({ children }) => {
	const [cartSection, setCartSection] = useState({ visible: false });

	return (
		<CartSectionCtx.Provider value={{ cartSection }}>
			<SetCartSectionCtx.Provider value={{ setCartSection }}>
				{children}
			</SetCartSectionCtx.Provider>
		</CartSectionCtx.Provider>
	);
};

export default CartSectionProvider;

export const useCartSection = () => {
	return useContext(CartSectionCtx);
};

export const useSetCartSection = () => {
	return useContext(SetCartSectionCtx);
};
