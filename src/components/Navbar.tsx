import React from 'react'
import './Navbar.scss'

const Navbar = () => {

    return (
			
				<nav className='navbar'>
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

export default Navbar