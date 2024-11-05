import './Banner.scss'

import Image from 'next/image'

import Img from '../../../public/Img.png'
import ImgLeft from '../../../public/ImgLeft.png'
import Button from '../UI/primitives/Button/Button'
import { TelegramSvg, UploadSvg} from '../../components/UI/svg'

const Banner = () => {
    return (
			<div className='banner'>
				<div className='banner__inner'>
					<div className='banner__item'>
						<div className='banner__left-center'>
							<div className='banner__text'>
								<div className='banner__text-tag'>
									<span className='banner__text-tag-fire'>🔥</span>
									<p className='banner__text-tag-p'>Undress anyone</p>
								</div>
								<div className='banner__text-title'>
									<h1 className='banner__text-title-h1'>Nude Generator</h1>
									<p className='banner__text-title-p'>
										Download the image to see any girl without clothes at the
										click of a button
									</p>
								</div>
							</div>
							<div className='banner__buttons'>
								<div className='banner__buttons-top'>
									<Button
										variant='rightIcon'
										color='blue'
										size='xl'
										icon={<TelegramSvg />}
									>
										Telegram bot
									</Button>
								</div>
								<div className='banner__buttons-bottom'>
									<Button
										variant='rightIcon'
										color='green'
										size='M'
										icon={<UploadSvg  />}
									>
										Launch up
									</Button>
									<Button variant='default' color='outline' size='M'>
										Instruction
									</Button>
								</div>
							</div>
						</div>
						<Image src={ImgLeft} alt='ImgLeft' width={707} height={677} className='banner__left-image'/>
					</div>
					<div className='banner__item'>
						<Image src={Img} alt='Img' width={707} height={677} className='banner__item-image'/>
					</div>
				</div>
			</div>
		)
}

export default Banner