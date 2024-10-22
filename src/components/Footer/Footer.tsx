import './Footer.scss';
import Logo from '../UI/svg/Logo.svg';
import Button from '../UI/primitives/Button/Button';
import ButtonSvg from '../UI/svg/ButtonSvg.svg';
import Navbar from '../Navbar/Navbar';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__top">
                <div className="footer__top-logo">
                    <Logo />
                    <div className="footer__top-logo-text">
                        <Button
                            variant='default'
                            iconLeft={<ButtonSvg width='50' height='50' />}
                        >
                            GENERATE
                        </Button>
                        <Navbar variant='footer'/>
                    </div>
                </div>
                <div className="footer__top-text">
                    
                </div>
            </div>
                
            <div className="footer__hr"></div>
            
            </div>
        </footer>
    )
}   
