import './MainImage.scss'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

interface MainImageProps {
	image: StaticImageData
    className?: string
}
const MainImage: React.FC<MainImageProps> = ({ image, className }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(false) 
		const timeout = setTimeout(() => setIsVisible(true), 150) 
		return () => clearTimeout(timeout) 
	}, [image])
	
	return (
		<Image
			src={image}
			alt='Main'
			className={`main-image ${isVisible ? 'visible' : ''} ${className || ''}`}
		/>
	)
}

export default MainImage