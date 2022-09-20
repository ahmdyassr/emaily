import {createContext, useContext} from 'react'

const GlobalContext = createContext(null)

const useGlobalContext = () => {
	return useContext(GlobalContext)
}

export {
	GlobalContext, 
	useGlobalContext
} 