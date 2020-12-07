import personReducer from '../reducers/personReducer';
import { UPDATE_NAME } from '../actions/personActions';

describe('reducer', () => {
	it('updates person name only', () => {
		expect(
			personReducer(
				{},
				{
					type: UPDATE_NAME,
					payload: 'Philip',
				}
			)
		).toEqual({ name: 'Philip' });
	});
});
