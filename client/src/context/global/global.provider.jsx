import {useReducer} from 'react'
import {GlobalContext} from './global.context'
import globalReducer from './global.reducer'
import {
	FETCH_USER,
	FETCH_STRIPE_TOKEN
} from './global.actions'
import axios from 'axios'

const initialState = {
	isAuth: null,
	token: null
}

const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(globalReducer, initialState)

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

	const handleToken = async (token) => {
		try {
			const response = await axios.post('/api/stripe', token)
			
			dispatch({
				type: FETCH_STRIPE_TOKEN,
				payload: response?.data
			})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<GlobalContext.Provider value={{
			...state,
			fetchUser,
			handleToken
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider