'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation } from 'swiper/modules'

import Button from '../UI/primitives/Button/Button'

import { UploadSvg, ArrowRightUp } from '../UI/svg'
import Image1 from '../../../public/Images/Pikaso1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/scrollbar'

import './Slider.scss'

const Slider = () => {
	// Временная функция map()* для теста карточек
	const renderSlides = (count: number) => {
		return Array.from({ length: count }, (_, index) => (
			<SwiperSlide key={index} className='slider__item'>
				<Image alt='Woman' src={Image1} className='slider__image' />
				<h3 className='slider__item-title'>breckie hill nude</h3>
			</SwiperSlide>
		))
	}

	return (
		<div className='slider'>
			<div className='slider-top'>
				<div className='slider-top__left'>
					<div className='slider-top__text'>
						<h2 className='slider-top__text-title'>Our gallery</h2>
						<p className='slider-top__text-description'>
							We are constantly adding new features and capabilities to make AI
							image generation even easier, more accessible and more fun.
						</p>
					</div>
					<div className='slider-top__button'>
						<Button
							variant='righticon'
							size='m'
							color='green'
							icon={<UploadSvg />}
							className='slider-top__button-load'
						>
							Load
						</Button>
					</div>
				</div>
				<div className='slider-top__right'>
					<Swiper
						slidesPerView='auto'
						spaceBetween={20}
						className='mySwiper'
						modules={[Scrollbar, Navigation]}
						scrollbar={{
							el: '.custom-scrollbar',
							draggable: true,
						}}
						navigation={{
							nextEl: '.custom-next-button',
							prevEl: '.custom-prev-button',
						}}
					>
						{renderSlides(10)}
						<div className='swiper-button-next custom-next-button'>
							<ArrowRightUp
								className='next-button-svg'
								width={26}
								height={26}
								viewBox='0 0 17 17'
							/>
						</div>
						<div className='swiper-button-prev custom-prev-button'>
							<ArrowRightUp
								className='prev-button-svg'
								width={26}
								height={26}
								viewBox='0 0 17 17'
							/>
						</div>
					</Swiper>
				</div>
			</div>
			<div className='slider-bottom'>
				<div className='custom-scrollbar'></div>
				<Button
					variant='default'
					size='m'
					className='slider-bottom__button-view'
				>
					View all
				</Button>
			</div>
		</div>
	)
}

export default Slider
