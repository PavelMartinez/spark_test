import './LanguageSelector.scss'

interface LanguageSelectorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
    className?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ children, className, leftIcon, rightIcon, ...props }) => {
    return (
			<button {...props} className={`language-selector ${className}`}>
				<div className='language-selector__icon'>{leftIcon}</div>
				<div className='language-selector__content'>
					<div className='language-selector__text'>{children}</div>
					<div className='language-selector__icon'>{rightIcon}</div>
				</div>
			</button>
		)
}