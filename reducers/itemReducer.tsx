export const itemInitialState = {};
export const addItem = 'addItem';
export const subtractItem = 'subtractItem';

export const itemReducer = (state, action) => {
	switch (action.type) {
		case addItem:
			state[action.id] ? state[action.id]++ : (state[action.id] = 1);
			return { ...state };
		case subtractItem:
			state[action.id]--;
			return { ...state };
		default:
			throw new Error('In itemReducer');
	}
};
