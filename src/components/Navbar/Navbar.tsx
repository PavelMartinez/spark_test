
import React from 'react'
import './Navbar.scss'
import Link from 'next/link'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'footer'
	isActive?: string
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'default', className, isActive, ...props }) => {

	const items = [
		{
			title: 'INSTRUCTION',
			link: '/instruction',
		},
		{
			title: 'SUPPORT',
			link: '/support',
		},
		{
			title: 'GALLERY',
			link: '/gallery',
		},
		{
			title: 'REFERAL PROGRAM',
			link: '/referal',
		},
	]
	if (variant === 'default') {
		return (
			<nav {...props} className={`navbar ${className || ''}`}>
				<ul className='navbar__list'>
					{items.map((item, index) => (
						<li
							key={index}
							className={`navbar__list-item ${
								isActive === item.link ? 'navbar__list-item--active' : ''
							}`}
						>
							<Link href={item.link} className='navbar__list-link'>
								{item.title}
							</Link>
						</li>
					))}
					{/* <li className='navbar__list-item'>
						<Link href='/instruction' className='navbar__list-link'>INSTRUCTION</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>SUPPORT</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>GALLERY</Link>
					</li>
					<li className='navbar__list-item'>
						<Link href='/' className='navbar__list-link'>REFERAL PROGRAM</Link>
					</li> */}
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
						<Link href='/instruction' className='navbar__list-link'>
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