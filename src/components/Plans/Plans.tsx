import { CloseSquare, Incognito, ShieldStar } from '../UI/svg'
import EmojiRocket from './assets/EmojiRocket.png'
import Emoji1 from './assets/Emoji1.png'
import EmojiFire from './assets/EmojiFire.png'
import EmojiImp from './assets/EmojiImp.png'
import EmojiLightning from './assets/EmojiLightning.png'
import EmojiThumbsUp from './assets/EmojiThumbsUp.png'
import EmojiOk from './assets/EmojiOk.png'
import EmojiPeach from './assets/EmojiPeach.png'
import EmojiStar from './assets/EmojiStar.png'
import Image from 'next/image'
import './Plans.scss'
import Card from '../UI/primitives/Card/Card'

const Plans = ({className = ''}) => { 
    return (
			<div className={`plans ${className || ''}`}>
				<div className='plans-top'>
					<h1 className='plans-top__title'>Our Plans</h1>
					<div className='plans-top__cards'>
						<Card
							className='plans-top__cards-item'
							product={{
								title: 'Basic',
								coins: 8,
								newPrice: '600 000',
								oldPrice: '500 000',
								achievements: [
									'Medium quality',
									'No queue',
									'4 Requests',
									'$1 / image',
								],
								icons: [
									<Image
										src={Emoji1}
										alt='Emoji1'
										width={33}
										height={33}
										key={0}
									/>,
									<Image
										src={EmojiLightning}
										alt='EmojiLightning'
										width={33}
										height={33}
										key={1}
									/>,
									<Image
										src={EmojiImp}
										alt='EmojiImp'
										width={33}
										height={33}
										key={2}
									/>,
									<Image
										src={EmojiOk}
										alt='EmojiOk'
										width={33}
										height={33}
										key={3}
									/>,
								],
							}}
							iconMain={
								<Image
									src={EmojiThumbsUp}
									alt='EmojiThumbsUp'
									width={37.3}
									height={40}
								/>
							}
						/>
						<div className='plans-top__cards-item plans-top__cards-item--popular'>
							<Card
								variant='popular'
								product={{
									title: 'Advanced',
									coins: 15,
									newPrice: '600 000',
									oldPrice: '500 000',
									achievements: [
										'Excellent quality',
										'No watermark',
										'No queue',
										'8 Requests',
										'$0.8/image',
									],
									icons: [
										<Image
											src={EmojiStar}
											alt='EmojiStar'
											width={33}
											height={33}
											key={0}
										/>,
										<Image
											src={EmojiPeach}
											alt='EmojiPeach'
											width={33}
											height={33}
											key={1}
										/>,
										<Image
											src={EmojiLightning}
											alt='EmojiLightning'
											width={33}
											height={33}
											key={2}
										/>,
										<Image
											src={EmojiImp}
											alt='EmojiImp'
											width={33}
											height={33}
											key={3}
										/>,
										<Image
											src={EmojiOk}
											alt='EmojiOk'
											width={33}
											height={33}
											key={4}
										/>,
									],
								}}
								iconMain={
									<Image
										src={EmojiRocket}
										alt='EmojiRocket'
										width={60}
										height={60}
									/>
								}
							/>
						</div>
						<Card
							className='plans-top__cards-item'
							product={{
								title: 'Pro',
								coins: 30,
								newPrice: '600 000',
								oldPrice: '500 000',
								achievements: [
									'Excellent quality',
									'No watermark',
									'No queue',
									'16 Requests',
									'$0.53/image',
								],
								icons: [
									<Image
										src={EmojiStar}
										alt='EmojiStar'
										width={33}
										height={33}
										key={0}
									/>,
									<Image
										src={EmojiPeach}
										alt='EmojiPeach'
										width={33}
										height={33}
										key={1}
									/>,
									<Image
										src={EmojiLightning}
										alt='EmojiLightning'
										width={33}
										height={33}
										key={2}
									/>,
									<Image
										src={EmojiImp}
										alt='EmojiImp'
										width={33}
										height={33}
										key={3}
									/>,
									<Image
										src={EmojiOk}
										alt='EmojiOk'
										width={33}
										height={33}
										key={4}
									/>,
								],
							}}
							iconMain={
								<Image src={EmojiFire} alt='EmojiFire' width={40} height={40} />
							}
						/>
					</div>
				</div>
				<div className='plans-bottom'>
					<div className='plans-bottom__item'>
						<div className='plans-bottom__item-icon'>
							<ShieldStar />
						</div>
						<h3 className='plans-bottom__item-title'>SECURE PAYMENTS</h3>
						<p className='plans-bottom__item-description'>
							Pay securely with confidence using credit card or crypto. Your
							bank statement will show &apos;JOYAI&apos;.
						</p>
					</div>
					<div className='dashed-line'></div>
					<div className='plans-bottom__item'>
						<div className='plans-bottom__item-icon'>
							<Incognito />
						</div>
						<h3 className='plans-bottom__item-title'>FULLY ANONYMOUS</h3>
						<p className='plans-bottom__item-description'>
							We do not track and do not store the images you generate or the
							prompts you input.
						</p>
					</div>
					<div className='dashed-line'></div>
					<div className='plans-bottom__item'>
						<div className='plans-bottom__item-icon'>
							<CloseSquare />
						</div>
						<h3 className='plans-bottom__item-title'>NO AUTO-RENEWAL</h3>
						<p className='plans-bottom__item-description'>
							To ensure you only pay for our product when you&apos;re actually
							using it, we will not charge you automatically.
						</p>
					</div>
				</div>
			</div>
		)
}

export default Plans