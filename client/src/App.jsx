import AuthState from './context/auth/auth.state'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>
const Landing = () => <div>Landing</div>

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Landing />}/>
					<Route path='/surveys' element={<Dashboard />}/>
					<Route path='/surveys/new' element={<SurveyNew />}/>
				</Routes>
			</BrowserRouter>
		</>
		// <AuthState>
		// 	<Card />
		// 	<Button type="add" label="Add" />
		// 	<Button type="decrease" label="Decrease" />
		// </AuthState>
	)
}

export default App