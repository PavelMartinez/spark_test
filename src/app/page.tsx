import './page.scss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppleIconImage from '../../public/Icons/AppleIconImage.png'
import AndroidIconImage from '../../public/Icons/AndroidIconImage.png'
import AnimationBg from '../../public/AnimationBg.png'
import Banner from '@/components/Banner/Banner'
import HowToWork from '@/components/HowToWork/HowToWork'
import Achievements from '@/components/Achievements/Achievements'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import UseGenerator from '@/components/UseGenerator/UseGenerator'
import Slider from '@/components/Slider/Slider'
import HowToWorks from '@/components/HowToWorks/HowToWorks'
import Plans from '@/components/Plans/Plans'


export default function Home() {
  return (
		<main className='home container'>
			<div className='reset-marigin'>
				<Banner />
			</div>
			<div className='home__buttons'>
				<Link href='/instructions/ios' className='home__buttons-item'>
					<Image
						src={AppleIconImage}
						alt='AppleIcon'
						className='home__buttons-icon'
						width={64}
						height={64}
					/>
					<div className='home__buttons-text'>
						DOWNLOAD THE APP ON
						<div className='home__buttons-text--bold'>IOS</div>
					</div>
				</Link>
				<Link href='/instructions/android' className='home__buttons-item'>
					<Image
						src={AndroidIconImage}
						alt='AndroidIcon'
						className='home__buttons-icon'
						width={64}
						height={64}
					/>
					<div className='home__buttons-text'>
						DOWNLOAD THE APP ON
						<div className='home__buttons-text--bold'>Android</div>
					</div>
				</Link>
			</div>
			<div className='reset-margin'>
				<HowToWork />
			</div>
			<Achievements />
			<div className='reset-margin'>
				<HowToWorks />
			</div>
			<div className='reset-margin position-relative'>
				<Plans />
				<div className='background-animation'>
					<Image src={AnimationBg} alt='AnimationBg' />
				</div>
			</div>
			<div className='reset-margin'>
				<Slider />
			</div>
			<FrequentlyAskedQuestions />
			<div className='reset-margin'>
				<UseGenerator />
			</div>
		</main>
	)
}
