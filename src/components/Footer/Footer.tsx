
import { Logo, LogoFooterMob, ButtonMobSvg, MagicStickSvg, YoutubeIcon, InstIcon, InIcon, FacebookIcon, PinterestIcon, XIcon } from '../UI/svg';
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

const Footer = () => {
    return (
			<footer className='footer'>
				<div className='footer__inner container'>
					<div className='footer-top'>
						<div className='footer-top__row'>
							<div className='footer-top__logo visible-mobile'>
								<LogoFooterMob />
							</div>
							<div className='footer-top__logo hidden-mobile'>
								<Logo />
							</div>
							<div className='footer-top__menu'>
								<Button
									variant='lefticon'
									size='s'
									color='blue'
									icon={<MagicStickSvg />}
								>
									GENERATE
								</Button>
								<Navbar variant='footer' />
							</div>
							<div className='footer-top__generation visible-mobile'>
								<Generation />
							</div>
						</div>
						<div className='footer-top__row footer-top__row--reverse'>
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
							<div className='footer-top__buttons'>
								<div className='hidden-mobile'>
									<Generation />
								</div>
								<Button
									href='/login'
									variant='lefticon'
									size='s'
									color='green'
									icon={<ButtonMobSvg className='color-green' />}
									className='footer-top__buttons-button'
								>
									LOGIN
								</Button>
							</div>
						</div>
					</div>
					<hr className='footer__hr' />
					<div className='footer-bottom'>
						<div className='footer__info'>
							<ul className='footer__info-list'>
								<li className='footer__info-item'>
									<Link href='/' className='footer__info-link'>
										Privacy Policy
									</Link>
								</li>
								<li className='footer__info-item'>
									<Link href='/' className='footer__info-link'>
										Public offer
									</Link>
								</li>
								<li className='footer__info-item'>
									<Link href='/' className='footer__info-link'>
										Cookies Policy
									</Link>
								</li>
								<li className='footer__info-item'>
									<Link href='/' className='footer__info-link'>
										©2023
									</Link>
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

export default Footer