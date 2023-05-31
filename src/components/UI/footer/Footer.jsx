import React from 'react'
import classes from './Footer.module.css'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { GrInstagram } from 'react-icons/gr'
import { BsTelegram, BsTwitter, BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.about_us}>
				<h3>Про нас</h3>
				<p>
					Єдиний в Одесі наймасштабніший зал функціонального тренінгу Escape.
					Найкраще функціональне обладнання від наших партнерів,
					передові системи тренувань та найкваліфікованіший тренерський склад. Ми не просто перші,
					ми – найкращі!
				</p>
				<Link className={classes.toMain}
					onClick={() => { window.scrollTo(0, 0) }} to='/'>
					<h4>До головної сторінки</h4>
				</Link>
			</div>
			<div className={classes.schedule}>
				<h3>Графік роботи</h3>
				<p>Понеділок 7:00-21:00</p>
				<p>Вівторок 7:00-21:00</p>
				<p>Середа 7:00-21:00</p>
				<p>Четвер 7:00-21:00</p>
				<p>П’ятниця 7:00-21:00</p>
				<p>Субота 9:00-21:00</p>
				<p>Неділя 9:00-21:00</p>
			</div>
			<div className={classes.contacts}>
				<h3>SOLID</h3>
				<div className={classes.contact_item}>
					<BsFillGeoAltFill className={classes.icons} />
					<a target='_blank' href='https://goo.gl/maps/45fDmAcCuPqhp43HA'>вулиця Космонавтів, 62/2, Одеса, Одеська область, 65000</a>
				</div>
				<div className={classes.contact_item}>
					<BsFillTelephoneFill className={classes.icons} />
					<a href='tel:00 (000) 000-000-00'>+38 (090) 123-203-13</a>
				</div>
				<div className={classes.contact_item}>
					<HiMail className={classes.icons} />
					<a href='mailto:solid@notmail.com'>solid@notmail.com</a>
				</div>
				<div className={classes.a_holder}>
					<a target='_blank' href="https://www.instagram.com/">
						<GrInstagram />
					</a>
					<a target='_blank' href="https://web.telegram.org/">
						<BsTelegram />
					</a>
					<a target='_blank' href="https://www.facebook.com/">
						<BsFacebook />
					</a>
					<a target='_blank' href="https://twitter.com/">
						<BsTwitter />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer