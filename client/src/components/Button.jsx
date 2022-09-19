import {useContext} from 'react'
import AuthContext from '../context/auth/auth.context'

const Button = ({type, label}) => {
	const {add, decrease} = useContext(AuthContext)

	return (
		<button onClick={type === 'add' ? add : decrease}>{label}</button>
	)
}

export default Button