import React from 'react'
import ReactDOM from 'react-dom'
import SteamAchievements from './components/SteamAchievements/SteamAchievements.jsx'

import './main.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const App = () => {
	return (
		<div className="app">
			<SteamAchievements />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
