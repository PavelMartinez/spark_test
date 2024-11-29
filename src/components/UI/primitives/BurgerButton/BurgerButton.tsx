import Navbar from '@/components/Navbar/Navbar'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { Generation } from '../Generation/Generation'
import './BurgerButton.scss'
import Button from '../Button/Button'
import { MagicStickSvg, FlagSvgRu, AltArrowDown } from '../../svg'

const BurgerButton = () => {
	return (
		<>
			<input id='burger-toggle' type='checkbox' />
			<label htmlFor='burger-toggle' className='burger'>
				<span></span>
			</label>
			<div className='overlay'>
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
					<LanguageSelector
						leftIcon={<FlagSvgRu width='40' height='40' />}
						rightIcon={<AltArrowDown />}
					>
						RU
					</LanguageSelector>
				</div>
			</div>
		</>
	)
}

export default BurgerButton