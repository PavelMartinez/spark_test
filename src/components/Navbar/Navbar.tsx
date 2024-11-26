import React from 'react'
import './Navbar.scss'
import Link from 'next/link'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'footer'
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'default', className, ...props }) => {
	if (variant === 'default') {
		return (
			<nav {...props} className={`navbar ${className || ''}`}>
				<ul className='navbar__list'>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>INSTRUCTION</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>SUPPORT</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>GALLERY</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>REFERAL PROGRAM</Link>
					</li>
				</ul>
			</nav>
		)
	}

	if (variant === 'footer') {
		return (
			<nav {...props} className={`navbar ${className || ''}`}>
				<ul className='navbar__list'>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>MAIN</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>
							INSTRUCTION
						</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>
							SUPPORT
						</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>
							GALLERY
						</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>
							REFERAL PROGRAM
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}



export default Navbar