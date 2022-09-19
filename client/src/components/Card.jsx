import {useContext} from 'react'
import AuthContext from '../context/auth/auth.context'

const Card = () => {
	const {count} = useContext(AuthContext)

	return (
		<div className="card">
			{count}
		</div>
	)
}

export default Card