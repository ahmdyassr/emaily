import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context/global/global.context'
import Payment from './Payment'

const Header = () => {
	const {isAuth, user, fetchUser} = useGlobalContext()

	useEffect(() => {
		fetchUser()
	}, [isAuth])

	const renderButtonState = () => {
		switch (isAuth) {
			case null: {
				return
			}

			case true: {
				return 	(
					<>
						<Payment />
						<span className="header__credits">{ user?.credits } Credits</span>
						<a className="header__button" href="/api/logout">Logout</a>
					</>
				)
			}

			case false: {
				return 	<a className="header__button" href="/auth/google">Login with Google</a>
			}
		}
	}

	return (
		<div className="header">
			<div className="left">
				<Link className="header__logo" to={isAuth ? '/surveys' : '/'}>Emaily</Link>
			</div>

			<div className="right">
				{renderButtonState()}
			</div>
		</div>
	)
}

export default Header