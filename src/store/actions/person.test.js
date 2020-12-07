import personActions, { UPDATE_NAME } from './personActions';

describe('actions', () => {
	it('returns the person action', () => {
		const expectedAction = {
			type: UPDATE_NAME,
			payload: 'Philip',
		};

		expect(personActions).toEqual(expectedAction);
	});
});
