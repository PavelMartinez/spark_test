import React from 'react'

import  { Logo }  from './UI/svg'

 
function Header() {
	return (
		<header className={`header header--default`}>
			<div className={`icon header__logo header__logo--centered`}>
				<Logo/>
			</div>
		</header>
	)
}

export default Header
