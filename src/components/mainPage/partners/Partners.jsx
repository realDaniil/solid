import React, { useEffect, useRef, useState } from 'react'
import classes from './Partners.module.css'
import puma from '../../../img/partners/puma-logo.svg'
import dorianYates from '../../../img/partners/dorian-yates-nutrition-logo.svg'
import hammer from '../../../img/partners/hammer-strength-logo.svg'
import hummel from '../../../img/partners/hummel-logo.svg'
import lifeFitness from '../../../img/partners/life-fitness-logo.svg'
import redBull from '../../../img/partners/red-bull-logo.svg'
import technogym from '../../../img/partners/technogym-logo.svg'
import fila from '../../../img/partners/fila-logo.svg'
import reebok from '../../../img/partners/reebok-logo.svg'
import asics from '../../../img/partners/asics-logo.svg'
import newBalance from '../../../img/partners/new-balance-logo.svg'
import nike from '../../../img/partners/nike-logo.svg'
import adidas from '../../../img/partners/adidas-logo.svg'

function Partners() {
	const partnersLineRef = useRef(null)
	let numberImg = -1;
	let toLeft = 0;
	useEffect(() => {
		const interval = setInterval(() => {
			numberImg++
			toLeft = toLeft - 150
			let newImg = document.createElement('img');
			newImg.src = partnersLineRef.current.children[numberImg].src;
			partnersLineRef.current.style.left = toLeft + 'px'
			partnersLineRef.current.insertAdjacentElement('beforeend', newImg);
		}, 3000)
		return () => clearInterval(interval)
	}, [])
	return (
		<section className={classes.partners}>
			<h2>Наші партнери</h2>
			<div className={classes.logo_holder} ref={partnersLineRef}>
				<img src={newBalance} alt="new balance" />
				<img src={asics} alt="asics" />
				<img src={puma} alt="puma" />
				<img src={redBull} alt="red bull" />
				<img src={dorianYates} alt="dorian yates" />
				<img src={adidas} alt="adidas" />
				<img src={technogym} alt="technogym" />
				<img src={fila} alt="fila" />
				<img src={reebok} alt="reebok" />
				<img src={hammer} alt="hammer" />
				<img src={nike} alt="nike" />
				<img src={hummel} alt="hummel" />
				<img src={lifeFitness} alt="lifeFitness" />
			</div>
		</section>
	)
}

export default Partners