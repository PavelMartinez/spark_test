import { ButtonSvg } from '../svg/ButtonSvg'
import './Button.scss'
import React from 'react'

interface ButtonProps {
	label: string
	onClick?: () => void
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({label}) => {
	return (
		<button
			className='button'
		>
			<ButtonSvg className='button__icon' />
			<div className='button__text'>{label}</div>
		</button>
	)
}

export default Button