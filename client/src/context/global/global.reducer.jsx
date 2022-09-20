import {FETCH_USER} from './global.actions'

const globalReducer = (state, action) => {
	switch (action.type) {
		case FETCH_USER: {
			return {...state,
				isAuth: action.payload.isAuth,
				user: action.payload.user
			}
		}
		default: {
			return state
		}
	}
}

export default globalReducer