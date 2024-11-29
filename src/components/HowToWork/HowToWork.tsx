import './HowToWork.scss'
import Image from 'next/image'
import Button from '../UI/primitives/Button/Button'
import { ButtonMobSvg } from '../UI/svg'
import AbsImg from '../../../public/Images/AbsImg.png'
import CloudDownloadImg from '../../../public/Images/CloudDownloadImg.png'

import SectionBanner from '../../shared/data/SectionBanner'


const HowToWork = ({className = ''}) => {
	const {title, description, button} = SectionBanner.howToWork
	return (
		<div className={`work ${className || ''}`}>
			<div className='work__left'>
				<div className='work__info'>
					<div className='work__info-text'>
						<h2 className='work__info-title'>{title}</h2>
						<p>
							{description}
						</p>
					</div>
					<Button
						variant='lefticon'
						color='white'
						size='m'
						className='work__info-button'
						icon={<ButtonMobSvg className='color-white' />}
					>
						{button}
					</Button>
				</div>
			</div>
			<div className='work__right'>
				<Image
					src={AbsImg}
					alt='Img'
					className='work__right-image work__right-image--abs'
				/>
				<div className='work__right-image work__right-image--cloud icon'>
					<Image src={CloudDownloadImg} alt='CloudDownloadImg' />
				</div>
			</div>
		</div>
	)
}

export default HowToWork