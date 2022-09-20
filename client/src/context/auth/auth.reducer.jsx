import {FETCH_USER} from './auth.actions'

const authReducer = (state, action) => {
	switch (action.type) {
		case FETCH_USER: {
			return {...state,
				isAuth: action.payload
			}
		}
		default: {
			return state
		}
	}
}

export default authReducer