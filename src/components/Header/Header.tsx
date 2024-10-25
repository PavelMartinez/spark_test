import React from 'react'
import { ButtonSvg, Login, Logo, FlagSvgRu, AltArrowDown } from '../UI/svg'
import Button from '../UI/primitives/Button/Button'
import Navbar from '../Navbar/Navbar'
import { LanguageSelector } from '../UI/primitives/LanguageSelector/LanguageSelector'
import { Generation } from '../UI/primitives/Generation/Generation'
 
 
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
