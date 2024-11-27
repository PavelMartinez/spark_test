
import './Achievements.scss'
import Image from 'next/image'
import EyesHeartsEmoji from './assets/EyesHeartsEmoji.png'
import HowDeliciousEmoji from './assets/HowDeliciousEmoji.png'
import MagicWandIcon from './assets/MagicWandIcon.png'
import StarEyesEmoji from './assets/StarEyesEmoji.png'
import StarsEmoji from './assets/StarsEmoji.png'


const Achievements = () => {
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
								<h3 className='achievements-item__text-title'>100 000+</h3>
								<p className='achievements-item__text-description'>
									Users every day
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
								<h3 className='achievements-item__text-title'>User-friendly</h3>
								<p className='achievements-item__text-description'>
									And intuitive interface
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
								<h3 className='achievements-item__text-title'>Realistic</h3>
								<p className='achievements-item__text-description'>
									Realistic image processing
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		)
}

export default Achievements