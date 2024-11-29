'use client'

import React, { useState, useEffect } from 'react'
import {
	Logo,
	LogoHeaderMob,
	FlagSvgRu,
	AltArrowDown,
	ButtonMobSvg,
	MagicStickSvg,
} from '../UI/svg'
import Button from '../UI/primitives/Button/Button'
import Navbar from '../Navbar/Navbar'
import { LanguageSelector } from '../UI/primitives/LanguageSelector/LanguageSelector'
import { Generation } from '../UI/primitives/Generation/Generation'
import BurgerButton from '../UI/primitives/BurgerButton/BurgerButton'

const Header: React.FC = () => {
	const [showHeader, setShowHeader] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setShowHeader(false) // Скрыть при прокрутке вниз
			} else {
				setShowHeader(true) // Показать при прокрутке вверх
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollY])

	return (
		<header
			style={{
				top: showHeader ? 0 : '-128px',
				transition: 'top 0.3s ease-in-out',
			}}
			className='header'
		>
			<div className='header__inner container'>
				<div className='header__mobile'>
					<div className='header__logo logo'>
						<LogoHeaderMob />
					</div>
					<div className='header__buttons'>
						<button className='header__buttons-item'>
							<ButtonMobSvg />
						</button>
						<BurgerButton />
					</div>
				</div>
				<div className='header__left'>
					<div className='header__logo logo'>
						<Logo />
					</div>
					<Button
						className='header__left-button'
						variant='lefticon'
						size='s'
						color='blue'
						icon={<MagicStickSvg />}
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
					<Generation />
					<Button
						variant='lefticon'
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
