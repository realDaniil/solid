import React, { useState } from 'react'
import cl from './CoachesCard.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

function CoachesCard({ position, phone, fullName, image, about }) {
	return (
		<div>
			{position === 0
				? <div className={cl.card}>
					<div className={cl.imgHolder}>
						<img src={image} className={cl.img} />
					</div>
					<div className={cl.infoHolder}>
						<h3>{fullName}</h3>
						<br />
						<p>{about}</p>
						<br />
						<a href='tel:00 (000) 000-000-00'><BsFillTelephoneFill /> {phone}</a>
						<br />
						<br />
						<a target="_blank" href="https://www.instagram.com/instagram/"><GrInstagram /> Instagram</a>
					</div>
				</div>
				: <div className={cl.card}>
					<div className={cl.infoHolder}>
						<h3>{fullName}</h3>
						<br />
						<p>{about}</p>
						<br />
						<a href='tel:00 (000) 000-000-00'><BsFillTelephoneFill /> {phone}</a>
						<br />
						<br />
						<a target="_blank" href="https://www.instagram.com/instagram/"><GrInstagram /> Instagram</a>
					</div>
					<div className={cl.imgHolder}>
						<img src={image} className={cl.img} />
					</div>
				</div>
			}
		</div>
	)
}

export default CoachesCard