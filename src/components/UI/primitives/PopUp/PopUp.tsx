import { Svg18 } from '../../svg'
import Button from '../Button/Button'
import './PopUp.scss'

import React from 'react'

interface PopUpProps {
	onClose: () => void // Колбек для закрытия попапа
}

const PopUp: React.FC<PopUpProps> = ({ onClose, ...props }) => {
	return (
		<div {...props} className='popup'>
			<div className='popup-content'>
				<div className='popup-content__icon icon'><Svg18 /></div>
				<h4 className='popup-content__title'>I give my consent that I am over 18 years of age</h4>
				<Button className='popup-content__button' variant='righticon' color='green' size='m' onClick={onClose}>Yeah, I am more 18+</Button>
				<Button className='popup-content__button' variant='righticon' color='outline' size='m' href='/' >Exit</Button>
			</div>
		</div>
	)
}

export default PopUp