import './Banner.scss'

import SectionBanner from '../../shared/data/SectionBanner'

import Image from 'next/image'

import Img from '../../../public/BannerImgMain.png'
import Vector from '../../../public/Vector2.png'
import BananaImg from '../../../public/Icons/BananaImg.png'
import ChiliPepperImg from '../../../public/Icons/ChiliPepperImg.png'
import EggplantImg from '../../../public/Icons/EggplantImg.png'

import Button from '../UI/primitives/Button/Button'
import { TelegramSvg, UploadSvg} from '../../components/UI/svg'

const Banner = ({ className = ''}) => {
	const { tag, title, description, buttons  } = SectionBanner.banner
	return (
		<div className={`banner ${className || ''}`}>
			<div className='banner__inner'>
				<div className='banner__item'>
					<div className='banner__item-center'>
						<div className='banner__text'>
							<div className='banner__text-tag'>
								<span className='banner__text-tag-fire'>🔥</span>
								<p className='banner__text-tag-p'>{tag}</p>
							</div>
							<div className='banner__text-title'>
								<h1 className='banner__text-title-h1'>{title}</h1>
								<p className='banner__text-title-p'>{description}</p>
							</div>
						</div>
						<div className='banner__buttons'>
							<div className='banner__buttons-top'>
								<Button
									variant='righticon'
									color='blue'
									size='xl'
									icon={<TelegramSvg />}
									className='banner__buttons-top-button'
								>
									{buttons.button1}
								</Button>
							</div>
							<div className='banner__buttons-bottom'>
								<Button
									variant='righticon'
									color='green'
									size='M'
									icon={<UploadSvg />}
									className='banner__buttons-bottom-button'
								>
									{buttons.button2}
								</Button>
								<Button
									variant='default'
									color='outline'
									size='M'
									className='banner__buttons-bottom-button'
								>
									{buttons.button3}
								</Button>
							</div>
						</div>
					</div>
					<div className='banner__item-bg'>
						<div className='banner__item-bg-inner'>
							<Image
								src={Vector}
								alt='Vector'
								className='banner__item-bg--vector'
							/>
							<p className='banner__item-bg--text'>Наведи курсор</p>
							<div className='banner__item-bg--banana icon'>
								<Image src={BananaImg} alt='BananaImg' />
							</div>
							<div className='banner__item-bg--eggplant icon'>
								<Image src={EggplantImg} alt='EggplantImg' />
							</div>
							<div className='banner__item-bg--chili icon'>
								<Image src={ChiliPepperImg} alt='ChiliPepperImg' />
							</div>
						</div>
					</div>
				</div>
				<div className='banner__item banner__item-right'>
					<Image
						src={Img}
						alt='Img'
						width={707}
						height={677}
						className='banner__item-image'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner