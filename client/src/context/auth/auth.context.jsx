import {createContext, useContext} from 'react'

const AuthContext = createContext(null)

const useAuthContext = () => {
	return useContext(AuthContext)
}

export {
	AuthContext, 
	useAuthContext
} 