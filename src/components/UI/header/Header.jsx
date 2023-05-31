import React, { useEffect, useState } from 'react'
import whiteLogo from '../../../img/logo_solid_w.svg'
import cl from './Header.module.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'


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

	const burgerStyles = [cl.burgerMenu]
	const [burgerActive, setBurgerActive] = useState(false)
	if (burgerActive) {
		burgerStyles.push(cl.active)
	}
	useEffect(() => {
		if (burgerActive) {
			document.body.style.overflow = 'hidden'
		} else document.body.style.overflow = ''
	})

	return (
		<>
			<nav style={{ background: headerBackground }} className={cl.header}>
				<Link to="/" onClick={() => { window.scrollTo(0, 0) }}>
					<img className={cl.logo} src={whiteLogo} alt="solid" />
				</Link>
				<div className={cl.content_holder}>
					<div className={cl.link_holder}>
						<Link to="/shop" onClick={() => { window.scrollTo(0, 0) }}><p>Абонементи та мерч</p></Link>
						<Link to="/trainers" onClick={() => { window.scrollTo(0, 0) }}><p>Тренери</p></Link>
						<Link to="/about" onClick={() => { window.scrollTo(0, 0) }}><p>Про нас</p></Link>
					</div>
					<GiHamburgerMenu className={cl.burger} onClick={() => setBurgerActive(true)} />
				</div>
			</nav>
			<div className={burgerStyles.join(' ')}>
				<div className={cl.backgroundBurgerMenu} onClick={() => setBurgerActive(false)} >
					<div className={cl.burger_link_holder} onClick={e => e.stopPropagation()}>
						<IoCloseSharp className={cl.closeBtn} onClick={() => setBurgerActive(false)} />
						<Link to="/shop" onClick={() => {
							window.scrollTo(0, 0)
							setBurgerActive(false)
						}}><p>Абонементи та мерч</p></Link>
						<Link to="/trainers" onClick={() => {
							window.scrollTo(0, 0)
							setBurgerActive(false)
						}}><p>Тренери</p></Link>
						<Link to="/about" onClick={() => {
							window.scrollTo(0, 0)
							setBurgerActive(false)
						}}><p>Про нас</p></Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header