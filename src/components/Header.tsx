import { Logo } from "./UI/svg/Logo"
import  Button  from "./UI/Button/Button"
 
function Header() {
  return (
		<header className='header header--default'>
			<div className='icon header__logo header__logo--centered'>
				<Logo />
			</div>
			<Button label='GENERATE' />
			<nav className='header__menu hidden-mobile'>
				<ul className='header__menu-list'>
					<li className='header__menu-item'>
						<a href='/' className='header__menu-link'>
							Home
						</a>
					</li>
					<li className='header__menu-item'>
						<a href='/' className='header__menu-link'>
							About
						</a>
					</li>
					<li className='header__menu-item'>
						<a href='/' className='header__menu-link'>
							Contact
						</a>
					</li>
					<li className='header__menu-item'>
						<a href='/' className='header__menu-link'>
							Contact
						</a>
					</li>
					<li className='header__menu-item'>
						<a href='/' className='header__menu-link'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
