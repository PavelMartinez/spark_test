'use client'

import { useState, useEffect } from 'react'
import UseInstruction from '@/components/UI/primitives/UseInstruction/UseInstruction'
import './style.scss'
import PopUp from '@/components/UI/primitives/PopUp/PopUp'

export default function GeneratePage() {

	const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false)

	// Открытие попапа при загрузке страницы
	useEffect(() => {
		setIsPopUpVisible(true)
	}, [])

	// Закрытие попапа
	const closePopUp = () => {
		setIsPopUpVisible(false)
	}

    return (
		<>
			<section className='generate container reset-padding-mobile margin-top'>
				<div className='generate__left'>
					<div className='generate__upload'>
						<div className='generate__upload-inner'>
							<div className='generate__upload-inner-icon'></div>
							<div className='generate__upload-inner-link'></div>
						</div>
					</div>
					<div className='generate__referal'></div>
					<div className='generate__instructions'>
						<h3 className='generate__instructions-title'>
							HOW TO IMPROVE RESULT
						</h3>
						<UseInstruction variant='generate' />
					</div>
				</div>
				<div className='generate__right'>
					<div className='generate__image-generate'></div>
					<div className='generate__image-banner'></div>
					<div className='generate__image-download'></div>
				</div>
			</section>
			{isPopUpVisible && <PopUp  onClose={closePopUp} />}
		</>
	)
}