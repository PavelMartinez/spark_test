import './HowToWork.scss'
import Image from 'next/image'
import HowToWorkImg from '../../../public/HowToWork.png'
import ImageHow from '../../../public/ImageHow.png'
import Button from '../UI/primitives/Button/Button'
import { WhiteButtonSvg } from '../UI/svg'

const HowToWork = () => {
    return (
        <div className='work'>
				<div className='work__absolute'>
					<div className='work__info'>
						<div className='work__info-text'>
							<h2 className='work__info-title'>Как это работает?</h2>
							<p>
								Наша модель искуственного интеллекта обучена на тысячах
								фотографий.
								<br /> Она максимально точно передает то, как будет выглядеть
								человек
								<br /> обнажённым
							</p>
						</div>
						<Button variant='leftIcon' color='white' size='m' icon={<WhiteButtonSvg />}>
							Войти
						</Button>
					</div>
					<Image src={ImageHow} alt='Img' className='work__absolute-image' />
				</div>
				<Image src={HowToWorkImg} alt='Img' className='work__info-image' />
			</div>
    )
}

export default HowToWork