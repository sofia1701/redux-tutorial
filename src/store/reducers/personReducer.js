import { UPDATE_NAME } from '../actions/personActions';

const personReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_NAME:
			return Object.assign({}, state, { name: payload }); //Updates only name

		default:
			return state;
	}
};

export default personReducer;
