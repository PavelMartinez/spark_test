import UseGenerator from '@/components/UseGenerator/UseGenerator'
import './style.scss'
import Link from 'next/link'
import ImagesGallery from '@/shared/data/ImagesGallery'
import Image from 'next/image'

export default function GalleryPage() {
    return (
			<section className='gallery container reset-padding-mobile margin-top'>
				<div className='gallery__container'>
					<p className='gallery__container-nav'>
						<Link href='/'>Main</Link> / Gallery
					</p>
					<h1 className='gallery__container-title'>Gallery</h1>
					<div className='gallery__container-images'>
						{ImagesGallery.map((image, index) => (
							<Image
								src={image}
                                alt='image'
								className={`gallery__container-image ${index}`}
								key={index}
							/>
						))}
					</div>
				</div>
				<UseGenerator />
			</section>
		)
}