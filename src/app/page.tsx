import './page.scss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppleIconImage from '../../public/Icons/AppleIconImage.png'
import AndroidIconImage from '../../public/Icons/AndroidIconImage.png'


export default function Home() {
  return (
		<main className='home container'>
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
		</main>
	)
}
