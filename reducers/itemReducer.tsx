export const itemInitialState = {};
export const addItem = 'addItem';
export const subtractItem = 'subtractItem';
export const clearItems = 'clearItems';

export const itemReducer = (state, action) => {
	switch (action.type) {
		case addItem:
			state[action.id] ? state[action.id]++ : (state[action.id] = 1);
			return { ...state };
		case subtractItem:
			state[action.id] === 1
				? delete state[action.id]
				: state[action.id]--;

			return { ...state };
		case clearItems:
			return {};
		default:
			throw new Error('In itemReducer');
	}
};
