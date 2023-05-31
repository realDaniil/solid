import React, { useState } from 'react'
import cl from './Card.module.css'
function Card({ img, alt, price, name, type, create }) {
	const getCardData = () => {
		if (type === 'card') {
		}
		if (type === 'hoodie' || type === 'shirt') {
			create({ src: img, name: name, price: price, type: type })
		}
	}
	const classesBtn = [cl.btn, 'buyButton']
	return (
		<div className={cl.card}>
			<div className={cl.img_holder}>
				<img src={img} alt={alt} className={cl.img} />
			</div>
			<p className={cl.name}>{name}</p>
			<p className={cl.price}>{price}₴</p>
			<button className={classesBtn.join(' ')} onClick={() => getCardData()}>Придбати зараз</button>
		</div>
	)
}

export default Card