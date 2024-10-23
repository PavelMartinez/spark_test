import React from 'react'

import ButtonSvg from '../UI/svg/ButtonSvg.svg'
import Login from '../UI/svg/Login.svg'
import Button from '../UI/primitives/Button/Button'
import Logo from '../UI/svg/Logo.svg'
import FlagSvgRu  from '../UI/svg/Flag-ru.svg'
import Navbar from '../Navbar/Navbar'
import { LanguageSelector } from '../UI/primitives/LanguageSelector/LanguageSelector'
import { Generation } from '../UI/primitives/Generation/Generation'
import AltArrowDown from '../UI/svg/Alt Arrow Down.svg'
 
 
function Header() {
  return (
		<header className='header'>
			<div className='header__inner container'>
				<div className='header__left'>
					<div className='header__logo logo'>
						<Logo />
					</div>
					<Button
						variant='default'
						iconLeft={<ButtonSvg width='50' height='50' />}
					>
						GENERATE
					</Button>
					<Navbar />
				</div>
				<div className='header__right'>
					<LanguageSelector
						leftIcon={<FlagSvgRu width='40' height='40' />}
						rightIcon={<AltArrowDown />}
					>
						RU
					</LanguageSelector>
					<Generation leftIcon={<FlagSvgRu />} rightIcon={<FlagSvgRu />} />
					<Button
						variant='login'
						color='green'
						iconLeft={<Login width='50' height='50' />}
					>
						LOGIN
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
