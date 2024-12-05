import Navbar from '@/components/Navbar/Navbar'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { Generation } from '../Generation/Generation'
import './BurgerButton.scss'
import Button from '../Button/Button'
import { MagicStickSvg } from '../../svg'

import React, { useState } from 'react'

const BurgerButton = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
    	setIsMenuOpen(!isMenuOpen);

    // Добавляем или убираем класс для блокировки прокрутки
		if (!isMenuOpen) {
		document.body.classList.add("lock-scroll");
		} else {
		document.body.classList.remove("lock-scroll");
		}
  	};
	return (
		<>
			<input id='burger-toggle' type='checkbox' />
			<label htmlFor='burger-toggle' className='burger' onClick={toggleMenu}>
				<span></span>
			</label>
			<div className={`overlay ${isMenuOpen ? 'open' : ''}`}>
				<Navbar variant='footer' className='overlay__navbar' />
				<Button
					variant='lefticon'
					size='s'
					color='blue'
					icon={<MagicStickSvg />}
					className='overlay__button'
				>
					GENERATE
				</Button>
				<div className='overlay__generation'>
					<Generation />
					<LanguageSelector>RU</LanguageSelector>
				</div>
			</div>
		</>
	)
}

export default BurgerButton