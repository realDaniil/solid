import React, { useRef, useState } from 'react'
import cl from './MerchModal.module.css'
import { IoMdClose } from 'react-icons/io'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

function MerchModal({ visible, setVisible, modalData }) {
	const classesModal = [cl.modal]
	if (visible) {
		classesModal.push(cl.active)
	} 
	const sizeHolder = useRef()
	const selectSize = e => {
		if (e.target.tagName === 'P') {
			for (let i = 0; i < sizeHolder.current.children.length; i++) {
				sizeHolder.current.children[i].className = cl.size
			}
			e.target.className = cl.selectedSize
			console.log(e.target.innerHTML)
		}
	}
	const [quantity, setQuantity] = useState(1)
	const quantityBtnClasses = [cl.quantityBtn]
	if (quantity > 1) {
		quantityBtnClasses.push(cl.active)
	}
	const [errorTextStyle, setErrorTextStyle] = useState('none')
	return (
		<div className={classesModal.join(' ')}>
			<IoMdClose className={cl.closeBtn} onClick={() => setVisible(false)} />
			<div className={cl.content_holder}>
				<div className={cl.img_firstHolder}>
					<div className={cl.img_holder}>
						<img src={modalData.src} alt="" />
					</div>
				</div>
				<div className={cl.modal_text}>
					<h3>{modalData.name}</h3>
					{modalData.type === 'shirt'
						? <>
							<p>Футболка від SOLID пошита з якісних матеріалів. Модель відмінно підходить для занять спортом, активного туризму та повсякденного носіння. Добре поєднується з будь-яким гардеробом. При дотриманні рекомендацій по догляду, футболка зберігає свій первозданний вигляд і колір.</p>
							<br />
							<p>Особливості:</p>
							<ul>
								<li>М'який і приємний на дотик матеріал.</li>
								<li>Модель із короткими рукавами.</li>
								<li>Круглий виріз горловини.</li>
								<li>Футболка середньої довжини.</li>
							</ul>
							<br />
							<p>Рекомендації з догляду:</p>
							<ul>
								<li>Максимальна температура прання 30℃.</li>
								<li>Прасувати за температури до 110℃.</li>
								<li>Не сушити в барабанній сушильній машині.</li>
								<li>Не відбілювати.</li>
								<li>Хімічна чистка заборонена.</li>
							</ul>
							<br />
							<p>Склад: 100% бавовна.</p>
							<br />
						</>
						: <>
							<p>Худі від SOLID пошита з якісних матеріалів. Модель відмінно підходить для повсякденного носіння. Добре поєднується з будь-яким гардеробом. При дотриманні рекомендацій по догляду, худі зберігає свій первозданний вигляд і колір.</p>
							<br />
							<p>Особливості:</p>
							<ul>
								<li>М'який і приємний на дотик матеріал.</li>
								<li>Рифлені манжети та нижній край.</li>
								<li>Худі з капюшоном.</li>
								<li>Стандартна посадка.</li>
							</ul>
							<br />
							<p>Рекомендації з догляду:</p>
							<ul>
								<li>Максимальна температура прання 30℃.</li>
								<li>Прасувати за температури до 110℃.</li>
								<li>Не сушити в барабанній сушильній машині.</li>
								<li>Не відбілювати.</li>
								<li>Хімічна чистка заборонена.</li>
							</ul>
							<br />
							<p>Склад: 70% бавовна, 30% перероблений поліестер.</p>
							<br />
						</>
					}
					<p>{modalData.price * quantity}₴</p>
					<div className={cl.quantityHolder}>
						<p>Кількість:</p>
						<AiFillMinusCircle className={quantityBtnClasses.join(' ')} onClick={() => {
							if (quantity > 1) {
								setQuantity(prev => prev - 1)
							}
						}} />
						<p>{quantity}</p>
						<AiFillPlusCircle className={cl.quantityBtn + ' ' + cl.active} onClick={() => {
							setQuantity(prev => prev + 1)
						}} />
					</div>
					<p>Обрати розмір</p>
					<div ref={sizeHolder} className={cl.size_holder} onClick={e => selectSize(e)}>
						<p className={cl.size}>XS</p>
						<p className={cl.size}>S</p>
						<p className={cl.selectedSize}>M</p>
						<p className={cl.size}>L</p>
						<p className={cl.size}>XL</p>
					</div>
					<button className={cl.payBtn} onClick={() => setErrorTextStyle('block')}>Замовити</button>
					<p style={{display: errorTextStyle, color: '#C3073F'}}>Вибачте, продаж тимчасово недоступний :(</p>
				</div>
			</div>
		</div>
	)
}

export default MerchModal