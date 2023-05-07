import React, { useEffect, useState } from 'react'
import aerobicCard from '../../../img/cards/aerobic-card.png'
import ultimateCard from '../../../img/cards/ultimate-card.png'
import aquazoneCard from '../../../img/cards/aquazone-card.png'
import fitnessCard from '../../../img/cards/fitness-card.png'
import classes from './CardsSection.module.css'
import { FiArrowRight } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './card/Card'
function CardsSection() {
	AOS.init()
	const [cardOffset, setCardOffset] = useState(0)
	function sliderPrev() {
		setCardOffset(cardOffset + 95)
		if (cardOffset >= 0) {
			setCardOffset(-285)
		}
	}
	function sliderNext() {
		setCardOffset(cardOffset - 95)
		if (cardOffset <= -285) {
			setCardOffset(0)
		}
	}		
	return (
		<section data-aos="fade-up" className={classes.section}>
			<h2>Абонементи</h2>
			<div className={classes.card_slider}>
				<div style={{ left: cardOffset + 'vw' }} className={classes.slider_line}>
					<div className={classes.card_groups_holder}>
						<div className={classes.cards_holder}>
							<Card img={aerobicCard}
								alt='Aerobic'
								name='Aerobic 1 місяць'
								price='1,380.00₴'
							/>
							<Card img={aerobicCard}
								alt='Aerobic'
								name='Aerobic 3 місяці'
								price='4,100.00₴'
							/>
							<Card img={aerobicCard}
								alt='Aerobic'
								name='Aerobic 6 місяців'
								price='7,650.00₴'
							/>
							<Card img={aerobicCard}
								alt='Aerobic'
								name='Aerobic 12 місяців'
								price='13,850.00₴'
							/>
						</div>
					</div>
					<div className={classes.card_groups_holder}>
						<div className={classes.cards_holder}>
							<Card img={ultimateCard}
								alt='Ultimate'
								name='Ultimate 1 місяць'
								price='2,800.00₴'
							/>
							<Card img={ultimateCard}
								alt='Ultimate'
								name='Ultimate 3 місяці'
								price='7,500.00₴'
							/>
							<Card img={ultimateCard}
								alt='Ultimate'
								name='Ultimate 6 місяців'
								price='14,300.00₴'
							/>
							<Card img={ultimateCard}
								alt='Ultimate'
								name='Ultimate 12 місяців'
								price='21,850.00₴'
							/>
						</div>
					</div>
					<div className={classes.card_groups_holder}>
						<div className={classes.cards_holder}>
							<Card img={aquazoneCard}
								alt='Aquazone'
								name='Aquazone 1 місяць'
								price='2,300.00₴'
							/>
							<Card img={aquazoneCard}
								alt='Aquazone'
								name='Aquazone 3 місяці'
								price='6,100.00₴'
							/>
							<Card img={aquazoneCard}
								alt='Aquazone'
								name='Aquazone 6 місяців'
								price='11,500.00₴'
							/>
							<Card img={aquazoneCard}
								alt='Aquazone'
								name='Aquazone 12 місяців'
								price='20,100.00₴'
							/>
						</div>
					</div>
					<div className={classes.card_groups_holder}>
						<div className={classes.cards_holder}>
							<Card img={fitnessCard}
								alt='Fitness'
								name='Fitness 1 місяць'
								price='1,600.00₴'
							/>
							<Card img={fitnessCard}
								alt='Fitness'
								name='Fitness 3 місяці'
								price='4,300.00₴'
							/>
							<Card img={fitnessCard}
								alt='Fitness'
								name='Fitness 6 місяців'
								price='8,100.00₴'
							/>
							<Card img={fitnessCard}
								alt='Fitness'
								name='Fitness 12 місяців'
								price='19,200.00₴'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.slider_arrows_holder}>
				<a><FiArrowLeft className={classes.slider_arrows} onClick={() => { sliderPrev() }} /></a>
				<a><FiArrowRight className={classes.slider_arrows} onClick={() => { sliderNext() }} /></a>
			</div>
		</section>
	)
}

export default CardsSection