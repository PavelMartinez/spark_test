'use client'

import './HowToWorks.scss'
import { useState } from 'react'
import Button from '../UI/primitives/Button/Button'
import MainImage from '../UI/primitives/Gallery/MainImage/MainImage'
import Thumbnails from '../UI/primitives/Gallery/Thumbnails/Thumbnails'

import { Clothes, UploadSvg, UploadSvgS } from '../../components/UI/svg'

import Pikaco2 from '../../../public/Images/Pikaso2.png'
import Pikaco1 from '../../../public/Images/Pikaso1.png'
import Pikaco3 from '../../../public/Images/Pikaso3.png'

import ImgHTWs1 from '../../../public/Icons/ImgHTWs1.png'
import ImgHTWs2 from '../../../public/Icons/ImgHTWs2.png'
import ImgHTWs3 from '../../../public/Icons/ImgHTWs3.png'




const HowToWorks = ({ className = '' }) => {
	// const [selectedImage, setSelectedImage] = useState(ImgHTWs1)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const mainImages = [Pikaco2, Pikaco1, Pikaco3]
	const previewImages = [
		ImgHTWs1,
		ImgHTWs2,
		ImgHTWs3,
	]

	return (
		<div className={`how-to-works ${className || ''}`}>
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
				<Button
					variant='righticon'
					size='m'
					color='green'
					icon={<UploadSvg />}
					className='how-to-works__left-button'
				>
					upLoad
				</Button>
			</div>
			<div className='how-to-works__right'>
				<div className='how-to-works__right-top'>
					<Thumbnails
						previewImages={previewImages}
						selectedIndex={selectedIndex}
						onImageSelect={setSelectedIndex}
						className=''
					/>
					<Button
						variant='righticon'
						color='green'
						icon={<UploadSvg />}
						className='hidden-tablet how-to-works__right-button-top'
					>
						Load
					</Button>
					<Button
						variant='righticon'
						color='green'
						icon={<UploadSvgS />}
						className='visible-tablet how-to-works__right-button-top'
					>
						Load
					</Button>
				</div>
				<div className='how-to-works__right-bottom'>
					<Button
						variant='righticon'
						size='m'
						color='green'
						icon={<Clothes />}
						className='how-to-works__right-button-bottom'
					>
						Undress
					</Button>
					<MainImage image={mainImages[selectedIndex]} className='how-to-works__right-img' />
				</div>
			</div>
		</div>
	)
}

export default HowToWorks
