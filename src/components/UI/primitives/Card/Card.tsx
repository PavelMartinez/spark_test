import './Card.scss'

import Crystal from './assets/Crystal.png'

import { ArrowRightUp }   from '../../svg'
import Image from 'next/image'
import Button from '@/components/UI/primitives/Button/Button'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'popular'
	product: {
		title?: string
		coins?: number
		newPrice?: string
		oldPrice?: string
		achievements?: Array<string>
		icons?: Array<React.ReactNode>
	}
	iconMain?: React.ReactNode
}
const Card: React.FC<CardProps> = ({
	variant = 'default',
	product,
	iconMain,
	...props
}) => {
	const {
		title,
		coins,
		newPrice,
		oldPrice,
		icons = [],
		achievements = [],
	} = product
	return (
		<div
			className={`${props.className ? props.className : ''} ${
				variant === 'popular' ? 'card-container' : ''
			}`}
		>
			<div {...props} className={`card card--variant-${variant}`}>
				<div className='card-top'>
					<div className='card-top__top'>
						{variant === 'popular' && (
							<div className='card-top__top-popular'>
								<p className='card-top__top-popular-text'>MOST POPULAR</p>
							</div>
						)}
						<div className='card-top__top-sale hidden-tablet'>
							<p className='card-top__top-sale-text'>Sale -50%</p>
						</div>
						<div className='card-top__top-coins'>
							<Image src={Crystal} alt='Crystal' />
							<p className='card-top__top-coins-text'>{coins}</p>
						</div>
					</div>
					<div className='card-top__bottom'>
						<div className='card-top__bottom-icon'>{iconMain}</div>
						<div className='card-top__bottom-text'>
							<h3 className='card-top__bottom-text-title'>{title}</h3>
							<div className='card-top__bottom-text-price'>
								<div className='card-top__bottom-text-price-left'>
									<p className='card-top__bottom-text-price-new'>{newPrice}</p>
									<div className='card-top__bottom-text-price-name'>
										<p className='card-top__bottom-text-price-currency'>$</p>
										<p className='card-top__bottom-text-price-designation'>
											CAD
										</p>
									</div>
								</div>
								<p className='card-top__bottom-text-price-old'>
									<s>{oldPrice}</s>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='card-bottom'>
					<div className='card-bottom__top'>
						<ul className='card-bottom__top-list'>
							<li className='card-bottom__top-item'>
								<div className='card-bottom__top-item-icon'>{icons[0]}</div>
								<p className='card-bottom__top-item-text'>{achievements[0]}</p>
							</li>
							<li className='card-bottom__top-item card-bottom__top-item--active'>
								<div className='card-bottom__top-item-icon card-bottom__top-item-icon--active'>
									{icons[1]}
								</div>
								<p className='card-bottom__top-item-text'>{achievements[1]}</p>
							</li>
							<li className='card-bottom__top-item'>
								<div className='card-bottom__top-item-icon'>{icons[2]}</div>
								<p className='card-bottom__top-item-text'>{achievements[2]}</p>
							</li>
							<li className='card-bottom__top-item card-bottom__top-item--active'>
								<div className='card-bottom__top-item-icon card-bottom__top-item-icon--active'>
									{icons[3]}
								</div>
								<p className='card-bottom__top-item-text'>{achievements[3]}</p>
							</li>
							<li
								className={`card-bottom__top-item ${
									achievements.length === 4 ? 'opacity-0' : ''
								}`}
							>
								<div className='card-bottom__top-item-icon'>{icons[4]}</div>
								<p className='card-bottom__top-item-text'>{achievements[4]}</p>
							</li>
						</ul>
					</div>
					<div className='card-bottom__bottom'>
						<Button
							variant='righticon'
							size='m'
							color={variant === 'default' ? 'blue' : 'white'}
							icon={
								<ArrowRightUp
									className={
										variant === 'default' ? 'color-white' : 'color-dark'
									}
								/>
							}
							className='card-bottom__bottom-button'
						>
							Choose plan
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
	
}

export default Card