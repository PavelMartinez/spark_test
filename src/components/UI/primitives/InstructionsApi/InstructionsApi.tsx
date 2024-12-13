'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'

import { InstructionImages, InstructionProps } from '@/shared/data/InstructionsApi'
import './InstructionsApi.scss'

interface InstructionsApiProps {
    variant: 'android' | 'ios'
    className?: string
}
const InstructionsApi: React.FC<InstructionsApiProps> = ({variant, className, ...props}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

	const instructions = InstructionProps[variant]
	const images = InstructionImages[variant]

    const points = [
			'Open site',
			'Click on the «Share» icon',
			'Add to Home Screen',
			'Enter a name',
			'Done!',
		]
    return (
			<div
				{...props}
				className={`instructions-api instructions-api--${variant} ${
					className || ''
				}`}
			>
				<div className='instructions-api__inner'>
					<p className='instructions-api__inner-text'>
						Main / Nudify App for {variant}
					</p>
					<h1 className='instructions-api__inner-title'>
						NUDIFY APP FOR {variant}
					</h1>
					<div className='instructions-api__inner-content'>
						<div className='instructions-api__inner-buttons hidden-mobile'>
							{points.map((point, index) => (
								<div
									key={index}
									className={`instructions-api__inner-buttons-item ${
										selectedIndex === index
											? 'instructions-api__inner-buttons-item--active'
											: ''
									}`}
									onClick={() => setSelectedIndex(index)}
								>
									<span className='instructions-api__inner-buttons-number'>
										{index + 1}
									</span>
									<p className='instructions-api__inner-buttons-text'>
										{point}
									</p>
								</div>
							))}
						</div>
						<div className='instructions-api__inner-steps hidden-mobile'>
							<div className='instructions-api__inner-info'>
								<div className='instructions-api__inner-text'>
									<span className='instructions-api__inner-text-step'>
										{selectedIndex + 1} step
									</span>
									<h3 className='instructions-api__inner-text-title'>
										{instructions[selectedIndex].title}
									</h3>
									<p className='instructions-api__inner-text-description'>
										{instructions[selectedIndex].description}
									</p>
								</div>
								<Button
									className='instructions-api__inner-text-button'
									size='m'
									color='green'
									variant='righticon'
									onClick={() =>
										setSelectedIndex(
											points[selectedIndex] === points[points.length - 1]
												? 0
												: selectedIndex + 1
										)
									}
								>
									{selectedIndex === points.length - 1 ? 'Read again' : 'Next'}
								</Button>
							</div>
							<Image
								src={images[selectedIndex]}
								alt='image'
								className='instructions-api__inner-steps-image'
							/>
						</div>
						<div className='instructions-api__inner-container visible-mobile'>
							{instructions.map((instruction, index) => (
								<div key={index} className='instructions-api__inner-steps'>
									<div className='instructions-api__inner-info'>
										<div className='instructions-api__inner-text'>
											<span className='instructions-api__inner-text-step'>
												{index + 1} step
											</span>
											<h3 className='instructions-api__inner-text-title'>
												{instruction.title}
											</h3>
											<p className='instructions-api__inner-text-description'>
												{instruction.description}
											</p>
										</div>
									</div>
									<Image
										src={images[index]}
										alt='image'
										className='instructions-api__inner-steps-image'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		)
}

export default InstructionsApi