import {useReducer} from 'react'
import AuthContext from './auth.context'
import authReducer from './auth.reducer'
import {
	INCREASE,
	DECREASE
} from './auth.actions'

const authState = ({children}) => {

	const initialState = {
		count: 0
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	const add = () => {
		dispatch({
			type: INCREASE
		})
	}

	const decrease = () => {
		dispatch({
			type: DECREASE
		})
	}

	return (
		<AuthContext.Provider value={{
			count: state.count,
			add,
			decrease
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default authState