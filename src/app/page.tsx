import './page.scss'
import React from 'react'
// import AnimationBg from '../../public/AnimationBg.png'
import Banner from '@/components/Banner/Banner'
import HowToWork from '@/components/HowToWork/HowToWork'
import Achievements from '@/components/Achievements/Achievements'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import UseGenerator from '@/components/UseGenerator/UseGenerator'
import Slider from '@/components/Slider/Slider'
import HowToWorks from '@/components/HowToWorks/HowToWorks'
import Plans from '@/components/Plans/Plans'
import Loading from '@/components/Loading/Loading'


export default function Home() {
  return (
		<main className='home container'>
			<div className='reset-margin'>
				<Banner />
			</div>
			<Loading />
			<div className='reset-margin'>
				<HowToWork />
			</div>
			<Achievements />
			<div className='reset-margin'>
				<HowToWorks />
			</div>
			<div className='reset-margin position-relative'>
				<Plans />
				{/* <div className='background-animation'>
					<Image src={AnimationBg} alt='AnimationBg' />
				</div> */}
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
