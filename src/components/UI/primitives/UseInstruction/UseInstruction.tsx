'use client'

import Button from '../Button/Button'
import './UseInstruction.scss'
import { useState } from 'react'
import Image from 'next/image'

import { UseInstructionImages, UseInstructionProps } from '@/shared/data/UseInstruction'


const UseInstruction = () => {
    const [selectedIndex, setSelectedIndex] = useState(1)
    const points = [1, 2, 3, 4, 5]
    
    return (
			<div className='use-instruction'>
				<div className='use-instruction__inner'>
					<div className='use-instruction__inner-content'>
						<div className='use-instruction__inner-images'>
							<div className='use-instruction__inner-image'>
								<Image
									src={UseInstructionImages[selectedIndex - 1]}
									alt='image'
									className='use-instruction__inner-image'
								/>
							</div>
							<div className='use-instruction__inner-image'>
								<Image
									src={UseInstructionImages[selectedIndex + points.length - 1]}
									alt='image'
									className='use-instruction__inner-image'
								/>
							</div>
						</div>
						<div className='use-instruction__inner-text'>
							<h3 className='use-instruction__inner-text-title'>
								{UseInstructionProps[selectedIndex - 1].title}
							</h3>
							<p className='use-instruction__inner-text-description'>
								{UseInstructionProps[selectedIndex - 1].description}
							</p>
							<Button
								className='use-instruction__inner-text-button'
								size='m'
								color='green'
								variant='righticon'
								onClick={() =>
									setSelectedIndex(
										points[selectedIndex - 1] === points[points.length - 1]
											? 1
											: selectedIndex + 1
									)
								}
							>
								{selectedIndex === points.length ? 'Repeat' : 'Next'}
							</Button>
						</div>
					</div>
					<div className='use-instruction__inner-checkpoint'>
						{points.map(point => (
							<div
								key={point}
								className={`use-instruction__inner-checkpoint-circle ${
									selectedIndex === point
										? 'use-instruction__inner-checkpoint-circle--active'
										: ''
								}`}
								onClick={() => setSelectedIndex(point)}
							>
								{point}
							</div>
						))}
					</div>
				</div>
			</div>
		)
}

export default UseInstruction