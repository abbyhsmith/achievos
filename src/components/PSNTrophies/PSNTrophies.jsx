import React, { useEffect, useState } from 'react'

const PSNTrophies = () => {
	const [trophyList, setTrophyList] = useState([])

	useEffect(() => {	
		fetch('https://m.np.playstation.net/api/trophy/v1/users/sylphinee/trophyTitles')
			.then(response => response.json())
			.then(data => setTrophyList(data))
	})
	
	console.log(trophyList)

	return(
		<div className="trophies">
			beep
		</div>
	)
}

export default PSNTrophies
