import {FETCH_USER} from './global.actions'

const globalReducer = (state, action) => {
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

export default globalReducer