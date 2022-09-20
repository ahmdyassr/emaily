import {useReducer} from 'react'
import {AuthContext} from './auth.context'
import authReducer from './auth.reducer'
import {
	FETCH_USER
} from './auth.actions'
import axios from 'axios'

const initialState = {
	isAuth: null
}

const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, initialState)

	const fetchUser = async () => {
		try {
			const response = await axios.get('/api/current_user') 
			const user = response?.data?.passport?.user
			
			if (user) {
				dispatch({
					type: FETCH_USER,
					payload: true
				})
			} else {
				dispatch({
					type: FETCH_USER,
					payload: false
				})
			}
			
		} catch(e) {
			console.log(e)
		}
	}

	return (
		<AuthContext.Provider value={{
			...state,
			fetchUser
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider