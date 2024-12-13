'use client'

import { useState, useEffect } from 'react'
import UseInstruction from '@/components/UI/primitives/UseInstruction/UseInstruction'
import './style.scss'
import PopUp from '@/components/UI/primitives/PopUp/PopUp'
import UploadGenerate from '../../../../public/Icons/UploadGenerate.png'
import Image from 'next/image'
import Button from '@/components/UI/primitives/Button/Button'
import {
	UploadSvg,
	FemSvg,
	ManSvg,
	IconLink,
	ArrowRightUpGoldSvg,
} from '@/components/UI/svg'
import Link from 'next/link'
import AndroidIconImage from '../../../../public/Icons/AndroidIconImage.png'
import AppleIconImage from '../../../../public/Icons/AppleIconImage.png'
import CrystalGold from '../../../../public/Icons/CrystalGold.png'
import CrystalBlue from '../../../../public/Icons/CrystalBlue.png'

export default function GeneratePage() {

	const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false)
	const [isSelected, setIsSelected] = useState('man')

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
								<div className='generate__upload-content'>
									<Image src={UploadGenerate} alt='UploadGenerate' />
									<div className='generate__upload-text'>
										<h4 className='generate__upload-title'>
											HAVE SOMEONE TO UNDRESS?
										</h4>
										<div className='generate__upload-select'>
											<div
												className={`generate__upload-select-item ${
													isSelected === 'fem'
														? 'generate__upload-select-item--active'
														: ''
												} icon`}
												onClick={() => setIsSelected('fem')}
											>
												<FemSvg />
											</div>
											<div
												className={`generate__upload-select-item ${
													isSelected === 'man'
														? 'generate__upload-select-item--active'
														: ''
												} icon`}
												onClick={() => setIsSelected('man')}
											>
												<ManSvg />
											</div>
										</div>
									</div>
									<Button
										variant='righticon'
										type='button'
										size='m'
										color='green'
										icon={<UploadSvg />}
										className='generate__upload-button'
									>
										UPLOAD
									</Button>
									<Link
										href='/instruction'
										className='generate__upload-button-link'
									>
										Инструкция
									</Link>
								</div>
								<div className='generate__upload-link'>
									<IconLink />
									<Link href='/'>PHOTO LINK URL</Link>
								</div>
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
						<div className='generate__coins'>
							<h4 className='generate__coins-title'>GENERATE AN IMAGE</h4>
							<div className='generate__coins-content'>
								<div className='generate__coins-item'>
									<div className='generate__coins-your-coins'>
										<p className='generate__coins-your-coins-text'>
											Your coins
										</p>
										<div className='generate__coins-item-inner'>
											640
											<Image src={CrystalGold} alt='CristalGold' width={24} />
										</div>
									</div>
									<div className='generate__coins-free-coins'>
										<p className='generate__coins-free-coins-text'>
											Free coins
										</p>
										<div className='generate__coins-item-inner'>
											1
											<Image src={CrystalBlue} alt='CristalGold' width={24} />
										</div>
									</div>
								</div>
								<span className='generate__coins-line'></span>
								<div className='generate__coins-item generate__coins-item--right'>
									<p className='generate__coins-item-text'>
										The cost of 1 generation is
									</p>
									<div className='generate__coins-item-circle'>
										2
										<Image src={CrystalGold} alt='CristalGold' width={16} />
									</div>
								</div>
							</div>
							<div className='generate__coins-banner'>
								<p className='generate__coins-banner-text'>
									We give 1 free coin EVERY DAY
								</p>
							</div>
						</div>
						<div className='generate__banner'>
							<div className='generate__banner-content'>
								<p className='generate__banner-content-message'>
									Don&apos;t have coins?
								</p>
								<h4 className='generate__banner-content-title'>
									Get coins for your activities!
								</h4>
								<div className='generate__banner-achieve'>
									<div className='generate__banner-achieve-text'>
										<p className='generate__banner-achieve-title'>
											+1 free coin for Telegram channel subscription
										</p>
										<div className='generate__banner-achieve-coins'>
											1
											<Image src={CrystalBlue} alt='CristalGold' width={10} />
										</div>
									</div>
									<div className='generate__banner-achieve-button icon'>
										<ArrowRightUpGoldSvg
											style={{ transform: 'rotate(45deg)' }}
										/>
									</div>
								</div>
								<div className='generate__banner-achieve'>
									<div className='generate__banner-achieve-text'>
										<p className='generate__banner-achieve-title'>
											+1 free coin for Telegram channel subscription
										</p>
										<div className='generate__banner-achieve-coins'>
											1
											<Image src={CrystalBlue} alt='CristalGold' width={10} />
										</div>
									</div>
									<div className='generate__banner-achieve-button icon'>
										<ArrowRightUpGoldSvg
											style={{ transform: 'rotate(45deg)' }}
										/>
									</div>
								</div>
								<Button
									variant='righticon'
									type='button'
									size='s'
									color='white'
									className='generate__banner-content-button'
								>
									Сomplete tasks and earn coins!
								</Button>
							</div>
							<Button
								variant='righticon'
								type='button'
								size='m'
								color='blue'
								icon={<Image src={CrystalGold} alt='CristalGold' width={24} />}
							>
								OR TOP UP YOUR BALANCE
							</Button>
						</div>
						<div className='generate__download'>
							<div className='generate__download-buttons'>
								<Link
									href='/instructions/ios'
									className='generate__download-button'
								>
									<Image src={AppleIconImage} alt='AppleIconImage' width={44} />
									Apple IOS
								</Link>
								<Link
									href='/instructions/android'
									className='generate__download-button'
								>
									<Image
										src={AndroidIconImage}
										alt='AndroidIconImage'
										width={42}
									/>
									Android
								</Link>
							</div>
							<p className='generate__download-text'>
								We do not save any data. We do not take any responsibility for
								images created using the website.
							</p>
						</div>
					</div>
				</section>
				{isPopUpVisible && <PopUp onClose={closePopUp} />}
			</>
		)
}