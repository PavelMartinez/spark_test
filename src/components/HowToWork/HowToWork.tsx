import './HowToWork.scss'
import Image from 'next/image'
import Button from '../UI/primitives/Button/Button'
import { ButtonMobSvg } from '../UI/svg'
import AbsImg from '../../../public/Images/AbsImg.png'
import CloudDownloadImg from '../../../public/Images/CloudDownloadImg.png'


const HowToWork = () => {
    return (
			<div className='work'>
				<div className='work__left'>
					<div className='work__info'>
						<div className='work__info-text'>
							<h2 className='work__info-title'>Как это работает?</h2>
							<p>
								Наша модель искусственного интеллекта обучена на тысячах
								фотографий.Она максимально точно передает то, как будет выглядеть человек обнажённым
							</p>
						</div>
						<Button
							variant='lefticon'
							color='white'
							size='m'
							className='work__info-button'
							icon={<ButtonMobSvg className='color-white' />}
						>
							Войти
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
						<Image src={CloudDownloadImg} alt='CloudDownloadImg'/>
					</div>
				</div>
				{/* <Image src={HowToWorkImg} alt='Img' className='work__info-image' /> */}
			</div>
		)
}

export default HowToWork