'use client'

import Button from '../Button/Button'
import './UseInstruction.scss'
import { useState } from 'react'
import Image from 'next/image'

import { UseInstructionImages, UseInstructionProps } from '@/shared/data/UseInstruction'

interface InstructionProps {
	variant: 'instruction' | 'generate'
	className?: string
}


const UseInstruction: React.FC<InstructionProps> = ({variant, className, ...props}) => {
    const [selectedIndex, setSelectedIndex] = useState(1)
    const points = [1, 2, 3, 4, 5]
    
    return (
			<div
				{...props}
				className={`use-instruction use-instruction--${variant} ${
					className || ''
				}`}
			>
				<div className={`use-instruction__inner use-instruction__inner--${variant}`}>
					<div
						className={`use-instruction__inner-content use-instruction__inner-content--${variant}`}
					>
						<div className='use-instruction__inner-images'>
							<div className='use-instruction__inner-image'>
								<Image
									src={UseInstructionImages[selectedIndex - 1]}
									alt='image'
									className={`use-instruction__inner-image use-instruction__inner-image--${variant}`}
								/>
							</div>
							<div
								className={`use-instruction__inner-image use-instruction__inner-image--${variant}`}
							>
								<Image
									src={UseInstructionImages[selectedIndex + points.length - 1]}
									alt='image'
									className='use-instruction__inner-image'
								/>
							</div>
						</div>
						<div
							className={`use-instruction__inner-text use-instruction__inner-text--${variant}`}
						>
							<h3
								className={`use-instruction__inner-text-title use-instruction__inner-text-title--${variant}`}
							>
								{UseInstructionProps[selectedIndex - 1].title}
							</h3>
							<p
								className={`use-instruction__inner-text-description use-instruction__inner-text-description--${variant}`}
							>
								{UseInstructionProps[selectedIndex - 1].description}
							</p>
							<Button
								className={`use-instruction__inner-text-button use-instruction__inner-text-button--${variant}`}
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
					<div className={`use-instruction__inner-checkpoint use-instruction__inner-checkpoint--${variant}`}>
						{points.map(point => (
							<div
								key={point}
								className={`use-instruction__inner-checkpoint-circle use-instruction__inner-checkpoint-circle--${variant} ${
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