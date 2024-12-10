import Button from '@/components/UI/primitives/Button/Button'
import Image from 'next/image'
import EggplantImg from '../../public/Icons/AdvertisingEggplant.png'
import ChiliImg from '../../public/Icons/AdvertisingChili.png'
import {UploadSvg} from '@/components/UI/svg'
import React from 'react'

const NotFoundPage = () => {
	return (
		<section className='notfound container'>
			<div className='notfound-page'>
				<div className='notfound-page__title'>404</div>
				<Image
					src={EggplantImg}
					alt='EggplantImg'
					className='notfound-page__image notfound-page__image--eggplant'
				/>
				<Image
					src={ChiliImg}
					alt='ChiliImg'
					className='notfound-page__image notfound-page__image--chili'
				/>
				<div className='notfound-page__info'>
					<p className='notfound-page__info-text'>Главная / 404</p>
					<div className='notfound-page__text'>
						<h1 className='notfound-page__text-title'>Возникла ошибка</h1>
						<p className='notfound-page__text-description'>
							Такой страницы не существует. Пожалуйста, вернитесь на главную.
						</p>
					</div>
					<div className='notfound-page__buttons'>
						<Button
							variant='righticon'
							color='green'
							size='m'
							href='/'
							icon={<UploadSvg />}
						>
							Upload
						</Button>
						<Button variant='righticon' color='outline' size='m' href='/'>
							On main
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NotFoundPage
