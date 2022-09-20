import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AuthProvider from './context/auth/auth.provider'
import Header from './components/Header'
import Landing from './components/Landing'

const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Landing />}/>
					<Route path='/surveys' element={<Dashboard />}/>
					<Route path='/surveys/new' element={<SurveyNew />}/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App