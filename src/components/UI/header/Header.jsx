import React, { useEffect, useState } from 'react'
import whiteLogo from '../../../img/logo_solid_w.svg'
import cl from './Header.module.css'
import { Link } from 'react-router-dom'
function Header() {
	const [headerBackground, setHeaderBackground] = useState('transparent')
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	if (100 <= scrollPosition && headerBackground === 'transparent') {
		setHeaderBackground('black')
	} else if (100 > scrollPosition && headerBackground === 'black') {
		setHeaderBackground('transparent')
	}
	return (
		<header style={{ background: headerBackground }} className={cl.header}>
			<Link to="/" onClick={() => { window.scrollTo(0, 0) }}>
				<img className={cl.logo} src={whiteLogo} alt="solid" />
			</Link>
			<div className={cl.content_holder}>
				<div className={cl.link_holder}>
					<Link to="/shop" onClick={() => { window.scrollTo(0, 0) }}><p>Абонементи та мерч</p></Link>
					<Link to="/trainers" onClick={() => { window.scrollTo(0, 0) }}><p>Тренери</p></Link>
					<Link to="/about" onClick={() => { window.scrollTo(0, 0) }}><p>Про нас</p></Link>
				</div>
			</div>
		</header>
	)
}

export default Header