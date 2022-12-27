export const itemInitialState = {};

const itemReducer = (state, action) => {
	switch (action.type) {
		case 'addItem':
			state[action.id] ? state[action.id]++ : (state[action.id] = 1);
			return { ...state };
		case 'subtractItem':
			state[action.id]--;
			console.log(state);
			return { ...state };
		default:
			throw new Error('In itemReducer');
	}
};

export default itemReducer;
