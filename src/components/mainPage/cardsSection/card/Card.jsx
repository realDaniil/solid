import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Card.module.css'
function Card({img, alt, price, name}) {
	return (
		<Link to='/shop' className={classes.card} onClick={()=> {window.scrollTo(0, 0)}}>
			<div className={classes.img_holder}>
				<img src={img} alt={alt} className={classes.img} />
			</div>
			<p>{name}</p>
			<p className={classes.price}>{price}</p>
		</Link>
	)
}

export default Card