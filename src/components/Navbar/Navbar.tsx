import React from 'react'
import './Navbar.scss'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'footer'
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'default',...props }) => {
	if (variant === 'default') {
		return (
			<nav {...props} className='navbar'>
				<ul className='navbar-list'>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>INSTRUCTION</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>SUPPORT</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>GALLERY</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>REFERAL PROGRAM</a>
					</li>
				</ul>
			</nav>
		)
	}

	if (variant === 'footer') {
		return (
			<nav {...props} className='navbar'>
				<ul className='navbar-list'>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>MAIN</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>INSTRUCTION</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>SUPPORT</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>GALLERY</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link'>REFERAL PROGRAM</a>
					</li>
				</ul>
			</nav>
		)
	}
}



export default Navbar