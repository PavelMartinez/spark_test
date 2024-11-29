import './Loading.scss'
import Image from 'next/image'
import Link from 'next/link'
import AppleIconImage from '../../../public/Icons/AppleIconImage.png'
import AndroidIconImage from '../../../public/Icons/AndroidIconImage.png'

import SectionBanner from '../../shared/data/SectionBanner'

const Loading = () => {
	const {androd, ios} = SectionBanner.loading
    return (
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
						{ios.title}
						<div className='home__buttons-text--bold'>{ios.name}</div>
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
						{androd.title}
						<div className='home__buttons-text--bold'>{androd.name}</div>
					</div>
				</Link>
			</div>
		)
}

export default Loading