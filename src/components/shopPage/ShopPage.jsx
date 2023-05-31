import React from 'react'
import Merch from './merch/Merch'
import ShopWelcomeSection from './welcomeSection/ShopWelcomeSection'
import CardsShop from './cardsShop/CardsShop'

function ShopPage() {
	return (
		<div>
			<ShopWelcomeSection />
			<CardsShop />
			<Merch />
		</div>
	)
}

export default ShopPage