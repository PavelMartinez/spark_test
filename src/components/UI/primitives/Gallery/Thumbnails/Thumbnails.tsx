import './Thumbnails.scss'

import Image, { StaticImageData } from 'next/image';



interface ThumbnailsProps {
	previewImages: StaticImageData[]
	selectedIndex: number
	onImageSelect: (index: number) => void
	className?: string
}

const Thumbnails: React.FC<ThumbnailsProps> = ({ 
	previewImages,
  	selectedIndex,
  	onImageSelect,
	className,
	...props 
}) => {
  return (
		<div {...props} className={`thumbnails ${className || ''}`}>
			{previewImages.map((image, index) => (
				<Image
					key={image.src}
					src={image}
					alt={`Thumbnail ${index + 1}`}
					className={`thumbnail ${selectedIndex === index ? 'active' : ''}`}
					onClick={() => onImageSelect(index)}
				/>
			))}
		</div>
	)
}

export default Thumbnails