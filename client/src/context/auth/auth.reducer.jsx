import {INCREASE, DECREASE} from './auth.actions'

const authReducer = (state, action) => {
	if (action.type === INCREASE) {
		return {
			...state,
			count: state.count + 1
		}
	}
 
	if (action.type === DECREASE) {
		return {
			...state,
			count: state.count - 1
		}
	}
}

export default authReducer