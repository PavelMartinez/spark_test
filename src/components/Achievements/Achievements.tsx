
import './Achievements.scss'
import Image from 'next/image'
import EyesHeartsEmoji from './assets/EyesHeartsEmoji.png'
import HowDeliciousEmoji from './assets/HowDeliciousEmoji.png'
import MagicWandIcon from './assets/MagicWandIcon.png'
import StarEyesEmoji from './assets/StarEyesEmoji.png'
import StarsEmoji from './assets/StarsEmoji.png'

import SectionBanner from '../../shared/data/SectionBanner'


const Achievements = () => {
	const {achievement1, achievement2, achievement3} = SectionBanner.achievements
    return (
			<div className='achievements'>
				<ul className='achievements-list'>
					<li className='achievements-item'>
						<div className='achievements-item__content'>
							<div className='achievements-item__icon'>
								<Image
									src={EyesHeartsEmoji}
									alt='EyesHeartsEmoji'
									className='achievements-item__icon--hearts-eyes'
								/>
								<Image
									src={HowDeliciousEmoji}
									alt='HowDeliciousEmoji'
									className='achievements-item__icon--how-delicious'
								/>
							</div>
							<div className='achievements-item__text'>
								<h3 className='achievements-item__text-title'>
									{achievement1.title}
								</h3>
								<p className='achievements-item__text-description'>
									{achievement1.description}
								</p>
							</div>
						</div>
					</li>
					<li className='achievements-item'>
						<div className='achievements-item__content'>
							<div className='achievements-item__icon'>
								<Image
									src={StarEyesEmoji}
									alt='StarEyesEmoji'
									className='achievements-item__icon--star-eyes'
								/>
								<Image
									src={StarsEmoji}
									alt='StarsEmoji'
									className='achievements-item__icon--stars'
								/>
							</div>
							<div className='achievements-item__text'>
								<h3 className='achievements-item__text-title'>
									{achievement2.title}
								</h3>
								<p className='achievements-item__text-description'>
									{achievement2.description}
								</p>
							</div>
						</div>
					</li>
					<li className='achievements-item'>
						<div className='achievements-item__content'>
							<div className='achievements-item__icon'>
								<Image
									src={MagicWandIcon}
									alt='MagicWandIcon'
									className='achievements-item__icon--wand'
								/>
							</div>
							<div className='achievements-item__text'>
								<h3 className='achievements-item__text-title'>
									{achievement3.title}
								</h3>
								<p className='achievements-item__text-description'>
									{achievement3.description}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		)
}

export default Achievements