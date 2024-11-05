import AchievImg1 from '../../../public/Icons/AchievImg1.png'
import AchievImg2 from '../../../public/Icons/AchievImg2.png'
import AchievImg3 from '../../../public/Icons/AchievImg3.png'
import './Achievements.scss'
import Image from 'next/image'

const Achievements = () => {
    return (
			<div className='achievements'>
				<ul className='achievements-list'>
					<li className='achievements-item'>
						<div className='achievements-item__content'>
							<Image src={AchievImg1} alt='AchievImg1' className='achievements-item__icon' />
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
							<Image src={AchievImg2} alt='AchievImg2' className='achievements-item__icon' />
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
							<Image src={AchievImg3} alt='AchievImg3' className='achievements-item__icon' />
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