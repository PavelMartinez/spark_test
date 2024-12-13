import './style.scss'
import Image from 'next/image'
import UseGenerator from '@/components/UseGenerator/UseGenerator'
import UseInstruction from '@/components/UI/primitives/UseInstruction/UseInstruction'
import EggplantImg from '@/../public/Icons/AdvertisingEggplant.png'
import ChiliImg from '@/../public/Icons/ChiliBig.png'
import VectorInstruction from '@/../public/VectorInstruction.png'
import Link from 'next/link'

import InstructionImages  from '@/shared/data/Instruction'

export default function InstructionPage() {
    return (
			<section className='instruction container reset-padding-mobile margin-top'>
				<div className='instruction__inner'>
					<p className='instruction__inner-nav'>
						<Link href='/'>Main</Link> / Instruction
					</p>
					<div className='instruction__inner-text'>
						<h1 className='instruction__inner-text-title'>
							HOW TO REMOVE CLOTHES FROM A PHOTO
						</h1>
						<p className='instruction__inner-text-description'>
							Please make sure the image meets the requirements listed below
							before selecting it. This will help ensure the best result for
							your order, and we will be happy to help you if you follow these
							guidelines.
						</p>
					</div>
					<UseInstruction variant='instruction' />
					<div className='instruction__inner-information'>
						<div className='instruction__inner-information-text'>
							<h3 className='instruction__inner-information-title'>
								PASS THE IMAGE TO THE BOT FOR PROCESSING
							</h3>
							<p className='instruction__inner-information-description'>
								После нажатия кнопки «Сгенерировать», пожалуйста, подождите
								завершения процесса. Обычно это занимает всего лишь до 20
								секунд, но иногда могут возникнуть небольшие задержки
								из-за высокой активности и большого количества запросов
								в очереди.
							</p>
						</div>
						<Image
							src={EggplantImg}
							alt='EggplantImg'
							width={147}
							className='instruction__inner-information-image instruction__inner-information-image--eggplant'
						/>
						<Image
							src={ChiliImg}
							alt='ChiliImg'
							width={398}
							className='instruction__inner-information-image instruction__inner-information-image--chili'
						/>
						<Image
							src={VectorInstruction}
							alt='VectorInstruction'
							className='instruction__inner-information-image instruction__inner-information-image--vector'
						/>
					</div>
				</div>
				<div className='instruction__gallery'>
					<h2 className='instruction__gallery-title'>
						Примеры наших изображений
					</h2>
					<div className='instruction__gallery-images'>
						{InstructionImages.map((image, index) => (
							<Image
								key={index}
								src={image}
								alt='image'
								width={463}
								className='instruction__gallery-image'
							/>
						))}
					</div>
				</div>
				<UseGenerator />
			</section>
		)
}