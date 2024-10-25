
import { Logo, Login, ButtonSvg, YoutubeIcon, InstIcon, InIcon, FacebookIcon, PinterestIcon, XIcon } from '../UI/svg';
import Button from '../UI/primitives/Button/Button';
import Navbar from '../Navbar/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Generation } from '../UI/primitives/Generation/Generation';

import MastercardIconImage from '../../../public/Icons/MastercardIconImage.png';
import VisaIconImage from '../../../public/Icons/VisaIconImage.png';
import MirIconImage from '../../../public/Icons/MirIconImage.png';
import QiwiIconImage from '../../../public/Icons/QiwiIconImage.png';
import YoomoneyIconImage from '../../../public/Icons/YoomoneyIconImage.png';



export const Footer = () => {
    return (
			<footer className='footer'>
				<div className='footer__container'>
					<div className='footer__top'>
						<div className='footer__top-logo'>
							<Logo />
							<div className='footer__top-logo-text'>
								<Button
									variant='default'
									iconLeft={<ButtonSvg width='50' height='50' />}
								>
									GENERATE
								</Button>
								<Navbar variant='footer' />
							</div>
						</div>
						<div className='footer__top-buttons'>
							<ul className='footer__socials'>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<PinterestIcon />
									</Link>
								</li>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<InIcon />
									</Link>
								</li>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<FacebookIcon />
									</Link>
								</li>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<XIcon />
									</Link>
								</li>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<InstIcon />
									</Link>
								</li>
								<li className='footer__socials-item'>
									<Link href='' className='icon footer__socials-link'>
										<YoutubeIcon />
									</Link>
								</li>
							</ul>
							<div className='footer__top-buttons-button'>
								<Generation />
								<Button
									variant='login'
									color='green'
									iconLeft={<Login width='50' height='50' />}
								>
									LOGIN
								</Button>
							</div>
						</div>
					</div>
					<div className='footer__bottom'>
						<div className='footer__info'>
							<ul className='footer__info-list'>
								<li className='footer__info-item'>
									<a className='footer__info-link'>Privacy Policy</a>
								</li>
								<li className='footer__info-item'>
									<a className='footer__info-link'>Public offer</a>
								</li>
								<li className='footer__info-item'>
									<a className='footer__info-link'>Cookies Policy</a>
								</li>
								<li className='footer__info-item'>
									<a className='footer__info-link'>Acceptable Use Policy</a>
								</li>
								<li className='footer__info-item'>
									<a className='footer__info-link'>Return policy</a>
								</li>
								<li className='footer__info-item'>
									<a className='footer__info-link'>©2023</a>
								</li>
							</ul>
						</div>
						<div className='footer__payments'>
							<div className='footer__payments-title'>We accept payment</div>
							<ul className='footer__payments-list'>
								<li className='footer__payments-item'>
									<Image
										src={MastercardIconImage}
										alt='Mastercard'
										className='footer__payments-icon'
										width={50}
										height={30}
									/>
								</li>
								<li className='footer__payments-item'>
									<Image
										src={VisaIconImage}
										alt='Visa'
										className='footer__payments-ico'
										width={50}
										height={30}
									/>
								</li>
								<li className='footer__payments-item'>
									<Image
										src={MirIconImage}
										alt='Mir Pay'
										className='footer__payments-ico'
										width={50}
										height={30}
									/>
								</li>
								<li className='footer__payments-item'>
									<Image
										src={QiwiIconImage}
										alt='Qiwi'
										className='footer__payments-ico'
										width={50}
										height={30}
									/>
								</li>
								<li className='footer__payments-item'>
									<Image
										src={YoomoneyIconImage}
										alt='YooMoney'
										className='footer__payments-ico'
										width={50}
										height={30}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		)
}   
