export const UPDATE_USER = 'UPDATE_USER';

const fetchUser = (dispatch) => {
	fetch('https://reqres.in/api/users?page=2')
		.then((res) => res.json())
		.then((res) => dispatch({type: UPDATE_USER, payload:res.data}));
};


export default fetchUser;
