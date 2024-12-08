'use client'

import React, { useState, useEffect } from 'react'
import {
	Logo,
	LogoHeaderMob,
	ButtonMobSvg,
	MagicStickSvg,
} from '../UI/svg'
import Button from '../UI/primitives/Button/Button'
import Navbar from '../Navbar/Navbar'
import { LanguageSelector } from '../UI/primitives/LanguageSelector/LanguageSelector'
import { Generation } from '../UI/primitives/Generation/Generation'
import BurgerButton from '../UI/primitives/BurgerButton/BurgerButton'
import Link from 'next/link'

const Header: React.FC = () => {
	const [showHeader, setShowHeader] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setShowHeader(false) 
			} else {
				setShowHeader(true) 
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
						<Link href='/login' className='header__buttons-item'>
							<ButtonMobSvg />
						</Link>
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
					<LanguageSelector>
						RU
					</LanguageSelector>
					<Generation />
					<Button
						variant='lefticon'
						size='s'
						color='green'
						icon={<ButtonMobSvg className='color-green' />}
						href='/login'
					>
						LOGIN
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
