import React, { useEffect, useState } from 'react'

import './styles.scss'

const SteamAchievements  = () => {
	const [playerInfo, setPlayerInfo] = useState([])
	const [gamesList, setGamesList] = useState([])
	const [achievementInfo, setAcvhievementInfo] = useState([])

	useEffect(() => {
		fetch('http://localhost:8080/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=20210636F8CD6D3A8260A19F51991989&steamids=76561198275907136')
			.then(response => response.json())
			.then(data => setPlayerInfo(data.response.players[0]))
	}, [])

	useEffect(() => {
		fetch('http://localhost:8080/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=20210636F8CD6D3A8260A19F51991989&steamid=76561198275907136&format=json&include_appinfo=true&include_played_free_games=true')
			.then(response => response.json())
			.then(data => setGamesList(data.response.games))

			// for(i = 0; i < gamesList.length; i++) {
			// 	fetch(`http://localhost:8080/http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gamesList[i].appid}&key=20210636F8CD6D3A8260A19F51991989&steamid=76561198275907136`)
			// 		.then(response => response.json())
			// 		.then(data => setAcvhievementInfo([...achievementInfo, data]))
			// }
	}, [])

	console.log(playerInfo)
	console.log(gamesList)

	return(
		<div className="steam">
			<div className="playerInfoHeader">
				<div className="iconAndName">
					<div className="playerIcon">
						<img src={playerInfo.avatarfull} />
					</div>
					<div className="playerUserName">
						{playerInfo.personaname}
					</div>
				</div>
				<div className="playerUrl">
					<a href={playerInfo.profileurl} target="_blank">View full profile</a>
				</div>
			</div>
			<div className="achievementInfo">
				{
					achievementInfo.success === false &&
						<div className="privateProfile">
							{achievementInfo.error}
						</div>
				}
			</div>
		</div>
	)
}

export default SteamAchievements
