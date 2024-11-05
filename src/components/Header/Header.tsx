import React from 'react'
import { Logo, LogoHeaderMob, FlagSvgRu, AltArrowDown, ButtonMobSvg, MagicStickSvg } from '../UI/svg'
import Button from '../UI/primitives/Button/Button'
import Navbar from '../Navbar/Navbar'
import { LanguageSelector } from '../UI/primitives/LanguageSelector/LanguageSelector'
import { Generation } from '../UI/primitives/Generation/Generation'
import BurgerButton from '../UI/primitives/BurgerButton/BurgerButton'
 
 
function Header() {
  return (
		<header className='header'>
			<div className='header__inner container'>
				<div className='header__mobile'>
					<div className='header__logo logo'>
						<LogoHeaderMob />
					</div>
					<div className='header__buttons'>
						<button className='header__buttons-item'>
							<ButtonMobSvg />
						</button>
						<BurgerButton variant='default' />
					</div>
				</div>
				<div className='header__left'>
					<div className='header__logo logo'>
						<Logo />
					</div>
					<Button
						variant='leftIcon'
						size='s'
						color='blue'
						icon={<MagicStickSvg />}
					>
						GENERATE
					</Button>
					<Navbar className='hidden-desktop' />
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
						variant='leftIcon'
						size='s'
						color='green'
						icon={<ButtonMobSvg className='color-green' />}
					>
						LOGIN
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
