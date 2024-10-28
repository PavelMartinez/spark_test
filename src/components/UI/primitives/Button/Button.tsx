import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'login'
	size?: 'M'
	color?: 'blue' | 'green'
	children?: React.ReactNode
	href?: string
	iconLeft?: React.ReactNode
}

const ButtonContent: React.FC<ButtonProps> = ({ variant = 'default', size = 'M', color = 'blue', children, iconLeft, className, ...props }) => {
	if (variant === 'default') {
		return (
			<button
				{...props}
				className={`button button--variant-${variant} button--size-${size} button--color-${color} ${className || ""}`}
			>
				<div className={`button__icon button__size-${size}`}>{iconLeft}</div>
				<div className='button__text'>
					{children}
				</div>
				
			</button>
		)
	}

	if (variant === 'login') {
		return (
			<button
				{...props}
				className={`button button--variant-${variant} button--size-${size} button--color-${color} ${className || ""}`}
			>
				<div className={`button__icon button__size-${size}`}>{iconLeft}</div>
				<div className='button__text'>{children}</div>
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