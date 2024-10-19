import { Logo } from "./UI/svg/Logo"
import  Button  from "./UI/Button/Button"
import  Navbar  from "./Navbar"
import './Header.scss'
 
function Header() {
  return (
		<header className='header'>
			<div className='header__container'>
				<div className='icon header__logo header__logo--centered'>
					<Logo />
				</div>
				<Button label='GENERATE' />
				<Navbar />
				<Button label='GENERATE' />
			</div>
		</header>
	)
}

export default Header
