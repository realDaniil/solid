import React, { useEffect, useRef } from 'react'
import { AiFillStar } from 'react-icons/ai'
import cl from './Stars.module.css'

function Stars(props) {
	let difference = 5 - props.stars
	if (difference < 0) {
		difference = 0
	} 
	if (difference > 5) {
		difference = 5
	}
	let starColor = props.starsColor
	if (starColor === undefined) {
		starColor = 'white'
	}
	const starsRef = useRef(null)
	useEffect(() => {
		for (let i = 1; i - 1 < difference; i++) {
			starsRef.current.children[starsRef.current.children.length - i].style.color = starColor
		}
	}, [])
	return (
			<div style={{display: 'flex'}} ref={starsRef}>
				<AiFillStar className={cl.star} />
				<AiFillStar className={cl.star} />
				<AiFillStar className={cl.star} />
				<AiFillStar className={cl.star} />
				<AiFillStar className={cl.star} />
		</div>
	)
}

export default Stars