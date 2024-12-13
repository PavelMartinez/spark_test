import './SupportApi.scss'
import { TelegramSvg, PenNewSquareSvg } from '../UI/svg'

import Button from '../UI/primitives/Button/Button'
import Link from 'next/link'
import Image from 'next/image'

import EggplantImg from '../../../public/Icons/AdvertisingEggplant.png'
import ChiliPepperImg from '../../../public/Icons/ChiliPepperImg.png'
import VectorSupport from '../../../public/VectorSupport.png'


const SupportApi = ({ className }: { className?: string }) => {
	return (
		<div className={`support-api ${className || ''}`}>
			<p className='support-api__text'>
				<Link href='/'>Main</Link> / Support
			</p>
			<div className='support-api__inner'>
				<div className='support-api__inner-content'>
					<h1 className='support-api__inner-title'>SUPPORT</h1>
					<p className='support-api__inner-description'>
						Fill out the form and we will answer your questions as soon as
						possible.
					</p>
					<Button
						variant='righticon'
						color='blue'
						size='xl'
						icon={<TelegramSvg />}
						className='support-api__inner-button'
					>
						Telegram
					</Button>
				</div>
				<form className='support-api__inner-form'>
                    <div className='support-api__inner-form-icon icon'><PenNewSquareSvg /></div>
					<div className='support-api__inner-form-info'>
						<div className='support-api__inner-form-item'>
							<label className='support-api__inner-form-info-label'>
								Your name
							</label>
							<input
								className='support-api__inner-form-info-input'
								type='text'
								placeholder='sdkfjn@gmail.com'
							/>
						</div>
						<div className='support-api__inner-form-item'>
							<label className='support-api__inner-form-info-label'>
								Your e-mail
							</label>
							<input
								className='support-api__inner-form-info-input'
								type='email'
								placeholder='sdkfjn@gmail.com'
							/>
						</div>
					</div>
					<div className='support-api__inner-form-question'>
						<label className='support-api__inner-form-question-label'>
							Your question
						</label>
						<textarea
							className='support-api__inner-form-question-textarea'
							name='question'
							id='question'
							placeholder='Your message...'
						></textarea>
					</div>
					<Button
						variant='righticon'
						color='green'
						size='m'
						className='support-api__inner-form-button'
					>
						Send
					</Button>
				</form>
			</div>
			<div className='support-api__item-bg support-api__item-bg--eggplant icon'>
				<Image src={EggplantImg} width={80} height={80} alt='EggplantImg' />
			</div>
			<div className='support-api__item-bg support-api__item-bg--chili icon'>
				<Image src={ChiliPepperImg} width={38} alt='ChiliPepperImg' />
			</div>
			<Image
				src={VectorSupport}
				alt='VectorSupport'
				className='support-api__item-bg support-api__item-bg--vector'
			/>
		</div>
	)
}

export default SupportApi
