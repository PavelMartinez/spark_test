import './LanguageSelector.scss'
import { AltArrowDown } from '../../svg'
import FlagRu from '../../../../../public/Icons/FlagRu.png'	
import Image from 'next/image'


interface LanguageSelectorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
    className?: string
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ children, className, ...props }) => {
    return (
			<button {...props} className={`language-selector ${className}`}>
				<div className='language-selector__icon language-selector__icon--flag'>
					<Image src={FlagRu} alt='FlagRu' />
				</div>
				<div className='language-selector__content'>
					<div className='language-selector__text'>{children}</div>
					<div className='language-selector__icon'><AltArrowDown /></div>
				</div>
			</button>
		)
}