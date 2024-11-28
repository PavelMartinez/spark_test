import './page.scss'
import React from 'react'
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
			<section className='home__banner'>
				<Banner className='reset-margin' />
				<Loading />
				<HowToWork className='reset-margin' />
				<Achievements />
			</section>
			<section className='home__price reset-margin'>
				<HowToWorks />
				<Plans className='home__price-plans' />
				<div className='home__price-background'></div>
			</section>
			<section className='home__slider'>
				<Slider className='reset-margin' />
				<FrequentlyAskedQuestions />
				<UseGenerator className='reset-margin' />
			</section>
		</main>
	)
}
