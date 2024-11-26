
import './Achievements.scss'

const Achievements = () => {
    return (
			<div className='achievements'>
				<ul className='achievements-list'>
					<li className='achievements-item'>
						<div className='achievements-item__content'>
							<div className='achievements-item__icon'></div>
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
							<div className='achievements-item__icon'></div>
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
							<div className='achievements-item__icon'></div>
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