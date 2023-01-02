import {
	useState,
	createContext,
	ReactNode,
	useContext,
	Dispatch,
	SetStateAction,
} from 'react';

interface CategoryCtxDispatch {
	setActiveCategory: Dispatch<SetStateAction<{}>>;
}
interface CategoryCtx {
	activeCategory: {
		name: string;
		id: number;
	};
}
export const CategoryContext = createContext<CategoryCtx | null>(null);
export const SetCategoryContext = createContext<CategoryCtxDispatch | null>(
	null
);

type Props = {
	children: ReactNode;
};
const CategoryProvider: React.FC<Props> = ({ children }) => {
	const [activeCategory, setActiveCategory] = useState({
		name: 'Sandwich',
		id: 0,
	});

	return (
		<CategoryContext.Provider value={{ activeCategory }}>
			<SetCategoryContext.Provider value={{ setActiveCategory }}>
				{children}
			</SetCategoryContext.Provider>
		</CategoryContext.Provider>
	);
};

export default CategoryProvider;

export const useCategory = () => {
	return useContext(CategoryContext);
};

export const useSetCategory = () => {
	return useContext(SetCategoryContext);
};
