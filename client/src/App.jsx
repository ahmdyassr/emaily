import AuthState from './context/auth/auth.state'
import Button from './components/Button'
import Card from './components/Card'

const App = () => {
	return (
		<AuthState>
			<Card />
			<Button type="add" label="Add" />
			<Button type="decrease" label="Decrease" />
		</AuthState>
	)
}

export default App