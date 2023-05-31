import React, { useState } from 'react'
import yellowShirt from '../../../img/merch/yellow-shirt-SOLID.png'
import greenShirt from '../../../img/merch/green-shirt-SOLID.png'
import blackShirt from '../../../img/merch/black-shirt-SOLID.png'
import whiteShirt from '../../../img/merch/white-shirt-SOLID.png'
import blueShirt from '../../../img/merch/dark-blue-shirt-SOLID.png'
import redShirt from '../../../img/merch/red-shirt-SOLID.png'
import blackHoodie from '../../../img/merch/black-hoodie-SOLID.png'
import whiteHoodie from '../../../img/merch/white-hoodie-SOLID.png'
import cl from './Merch.module.css'
import MerchModal from '../../UI/merchModal/MerchModal'
import Card from '../card/Card'
function Merch() {
	const [modalVisible, setModalVisible] = useState(false)
	const [modalContent, setModalContent] = useState({ src: null, name: null, about: null })
	const shirtMerchModalFunction = e => {
		if (e.target.className.includes('buyButton')) {
			setModalVisible(true)
		}
	}
	const hoodieMerchModalFunction = e => {
		if (e.target.className.includes('buyButton')) {
			setModalVisible(true)
		}
	}
	const receivedData = newData => {
		setModalContent(newData)
	}

	return (
		<>
			<section className={cl.section}>
				<h2>ФУТБОЛКИ</h2>
				<div className={cl.tShirt_holder} onClick={e => shirtMerchModalFunction(e)}>
					<Card img={yellowShirt}
						name='Жовта футболка SOLID'
						price='800.00'
						create={receivedData}
						type='shirt'
						/>
					<Card img={greenShirt}
						name='Зелена футболка SOLID'
						price='800.00'
						create={receivedData}
						type='shirt'
						/>
					<Card img={blackShirt}
						name='Чорна футболка SOLID'
						price='999.00'
						create={receivedData}
						type='shirt'
						/>
					<Card img={whiteShirt}
						name='Біла футболка SOLID'
						price='999.00'
						create={receivedData}
						type='shirt'
						/>
					<Card img={blueShirt}
						name='Синя футболка SOLID'
						price='800.00'
						create={receivedData}
						type='shirt'
						/>
					<Card img={redShirt}
						name='Червона футболка SOLID'
						price='800.00'
						create={receivedData}
						type='shirt'
						/>
				</div>
				<h2>ХУДІ</h2>
				<div className={cl.hoodie_holder} onClick={e => hoodieMerchModalFunction(e)}>
					<Card img={blackHoodie}
						name='Чорне худі SOLID'
						price='1500.00'
						create={receivedData}
						type='hoodie'
						/>
					<Card img={whiteHoodie}
						name='Біле худі SOLID'
						price='1500.00'
						create={receivedData}
						type='hoodie'
						/>
				</div>
			</section>
			<MerchModal setVisible={setModalVisible} visible={modalVisible} modalData={modalContent} />
		</>
	)
}

export default Merch