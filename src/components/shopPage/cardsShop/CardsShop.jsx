import React, { useState } from 'react'
import cl from './CardsShop.module.css'
import aerobicCard from '../../../img/cards/aerobic-card.png'
import ultimateCard from '../../../img/cards/ultimate-card.png'
import aquazoneCard from '../../../img/cards/aquazone-card.png'
import fitnessCard from '../../../img/cards/fitness-card.png'
import Card from '../card/Card'
import GrowlNotification from '../../UI/growlNotification/GrowlNotification'

function CardsShop() {
	const [display, setDisplay] = useState('none')
	const displayFunction = e => {
		if (e.target.className.includes('buyButton')) {
			setDisplay('flex')
		}
	}
	return (
		<section className={cl.section} onClick={e => displayFunction(e)}>
			<h2>Aerobic</h2>
			<div className={cl.cardsHolder}>
				<Card img={aerobicCard}
					alt='Aerobic'
					name='Aerobic 1 місяць'
					price='1,380.00'
					type='card'
				/>
				<Card img={aerobicCard}
					alt='Aerobic'
					name='Aerobic 3 місяці'
					price='4,100.00'
					type='card'
					/>
				<Card img={aerobicCard}
					alt='Aerobic'
					name='Aerobic 6 місяців'
					price='7,650.00'
					type='card'
					/>
				<Card img={aerobicCard}
					alt='Aerobic'
					name='Aerobic 12 місяців'
					price='13,850.00'
					type='card'
					/>
			</div>
			<h2>Fitness</h2>
			<div className={cl.cardsHolder}>
				<Card img={fitnessCard}
					alt='Fitness'
					name='Fitness 1 місяць'
					price='1,600.00'
					type='card'
					/>
				<Card img={fitnessCard}
					alt='Fitness'
					name='Fitness 3 місяці'
					price='4,300.00'
					type='card'
					/>
				<Card img={fitnessCard}
					alt='Fitness'
					name='Fitness 6 місяців'
					price='8,100.00'
					type='card'
					/>
				<Card img={fitnessCard}
					alt='Fitness'
					name='Fitness 12 місяців'
					price='19,200.00'
					type='card'
					/>
			</div>
			<h2>Ultimate</h2>
			<div className={cl.cardsHolder}>
				<Card img={ultimateCard}
					alt='Ultimate'
					name='Ultimate 1 місяць'
					price='2,800.00'
					type='card'
					/>
				<Card img={ultimateCard}
					alt='Ultimate'
					name='Ultimate 3 місяці'
					price='7,500.00'
					type='card'
					/>
				<Card img={ultimateCard}
					alt='Ultimate'
					name='Ultimate 6 місяців'
					price='14,300.00'
					type='card'
					/>
				<Card img={ultimateCard}
					alt='Ultimate'
					name='Ultimate 12 місяців'
					price='21,850.00'
					type='card'
					/>
			</div>
			<h2>Aquazone</h2>
			<div className={cl.cardsHolder}>
				<Card img={aquazoneCard}
					alt='Aquazone'
					name='Aquazone 1 місяць'
					price='2,300.00'
					type='card'
					/>
				<Card img={aquazoneCard}
					alt='Aquazone'
					name='Aquazone 3 місяці'
					price='6,100.00'
					type='card'
					/>
				<Card img={aquazoneCard}
					alt='Aquazone'
					name='Aquazone 6 місяців'
					price='11,500.00'
					type='card'
					/>
				<Card img={aquazoneCard}
					alt='Aquazone'
					name='Aquazone 12 місяців'
					price='20,100.00'
					type='card'
					/>
			</div>
			<GrowlNotification 
			display={display}
			setDisplay={setDisplay}
			text='Вибачте, продаж тимчасово недоступний, але ви завжди можете отримати абонемент у нашому фітнес-клубі' />
		</section>
	)
}

export default CardsShop