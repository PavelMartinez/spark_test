import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'leftIcon' | 'rightIcon' | 'default'
	size?: 'M' | 'S' | 'm' | 's' | 'xl' | 'XL'
	color?: 'blue' | 'green' | 'white' | 'outline'
	children?: React.ReactNode
	href?: string
	icon?: React.ReactNode
}

const ButtonContent: React.FC<ButtonProps> = ({
	variant = 'leftIcon',
	size = 'S',
	color = 'outline',
	children,
	icon,
	...props
}) => {
	if (variant === 'leftIcon' || variant === 'default') {
		return (
			<button
				{...props}
				className={`button button--variant-${variant} button--size-${size} button--color-${color} ${
					props.className ? props.className : ''
				}`}
			>
		
					<div className={`button__icon button__size-${size}`}>{icon}</div>
					<div className='button__text'>{children}</div>
				
			</button>
		)
	}

	if (variant === 'rightIcon') {
		return (
			<button
				{...props}
				className={`button button--variant-${variant} button--size-${size} button--color-${color} ${
					props.className ? props.className : ''
				}`}
			>
				<div className='button__content'>
					<div className='button__text'>{children}</div>
					<div className={`button__icon button__size-${size}`}>{icon}</div>
				</div>
			</button>
		)
	}

	
}


const Button = (props: ButtonProps) => {
	if (props.href) {
		// return (
		// 	<Link href={props.href} passHref legacyBehavior>
		// 		<ButtonContent {...props} />
		// 	</Link>
		// )
	}
	return <ButtonContent {...props} />
}

export default Button