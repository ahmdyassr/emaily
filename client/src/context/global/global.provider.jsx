import {useReducer} from 'react'
import {GlobalContext} from './global.context'
import globalReducer from './global.reducer'
import {
	FETCH_USER
} from './global.actions'
import axios from 'axios'

const initialState = {
	isAuth: null,
	token: null,
	user: {}
}

const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(globalReducer, initialState)

	const fetchUser = async () => {
		try {
			const response = await axios.get('/api/current_user') 
			const user = response?.data
			
			if (user) {
				dispatch({
					type: FETCH_USER,
					payload: {
						isAuth: true,
						user
					}
				})

			} else {
				dispatch({
					type: FETCH_USER,
					payload: {
						isAuth: false
					}
				})
			}
			
		} catch(e) {
			console.log(e)
		}
	}

	const handleToken = async (token) => {
		try {
			const response = await axios.post('/api/stripe', token)
			const user = response?.data

			dispatch({
				type: FETCH_USER,
				payload: {
					user
				}
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