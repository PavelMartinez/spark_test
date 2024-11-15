import './HowToWorks.scss'

import Image from 'next/image'

import Button from '../UI/primitives/Button/Button'

import { Clothes, UploadSvg } from '../../components/UI/svg'
import Pikaco2 from '../../../public/Images/Pikaso2.png'

import ImgHTWs1 from '../../../public/Icons/ImgHTWs1.png'
import ImgHTWs2 from '../../../public/Icons/ImgHTWs2.png'
import ImgHTWs3 from '../../../public/Icons/ImgHTWs3.png'



const HowToWorks = () => {
	return (
		<div className='how-to-works'>
			<div className='how-to-works__left'>
				<h1 className='how-to-works__left-title'>How it works</h1>
				<ol className='how-to-works__left-list'>
					<li className='how-to-works__left-item'>
						Register safely & anonymously
					</li>
					<li className='how-to-works__left-item'>
						Upload a photo of a person standing at a normal edge
					</li>
					<li className='how-to-works__left-item'>
						Choose a generation mode. and off you go!
					</li>
				</ol>
				<Button variant='righticon' size='m' color='green' icon={<UploadSvg />} className='how-to-works__left-button'>
					upLoad
				</Button>
			</div>
			<div className='how-to-works__right'>
				<div className='how-to-works__right-top'>
					<ul className='how-to-works__right-top-list'>
						<li className='how-to-works__right-top-item'>
							<Image
								src={ImgHTWs1}
								alt='ImgHTWs1'
								className='how-to-works__right-top-icon'
							/>
						</li>
						<li className='how-to-works__right-top-item'>
							<Image
								src={ImgHTWs2}
								alt='ImgHTWs2'
								className='how-to-works__right-top-icon'
							/>
						</li>
						<li className='how-to-works__right-top-item'>
							<Image
								src={ImgHTWs3}
								alt='ImgHTWs3'
								className='how-to-works__right-top-icon'
							/>
						</li>
					</ul>
					<Button
						variant='righticon'
						color='green'
						icon={<UploadSvg  />}
						className='how-to-works__right-button-top'
					>
						Load
					</Button>
				</div>
				<Button
					variant='righticon'
					size='m'
					color='green'
					icon={<Clothes />}
					className='how-to-works__right-button-bottom'
				>
					Undress
				</Button>
				<Image
					src={Pikaco2}
					alt='Pikaco2'
					className='how-to-works__right-img'
				/>
			</div>
		</div>
	)
}

export default HowToWorks
