import React, { useEffect, useState } from 'react'
import MyReviewModal from '../../UI/myReviewModal/MyReviewModal'
import Review from './review/Review'
import cl from './ReviewsSection.module.css'

function ReviewsSection() {
	const [sortVisible, setSortVisible] = useState(false)
	const sortOptionsClasses = [cl.sort_options]
	if (sortVisible) {
		sortOptionsClasses.push(cl.active)
	}
	const [modal, setModal] = useState(false)
	const [reviews, setReviews] = useState([
		{ name: 'Gregory', title: 'Усім раджу', body: 'Ходжу в цю мережу понад 6 років на групові тренування, останній рік займаюся винятково в чудового й харизматичного тренера Альони, чудова тренерка, дуже цікаві й не уповільнені тренування, як інтенсив, так і стретчинг на вищому рівні! Керівництво, молодці, що знайшли такого чудового тренера (за 6 років, є з ким порівняти)', stars: 5, id: 1 },
		{ name: 'Анонім', title: '', body: 'Мені не сподобалось', stars: 1, id: 2 },
		{ name: 'Наталія', title: 'Сподобалось', body: 'Чудове місце для любителів спорту! Ходжу тільки другий місяць все подобається. Окремо хотів би подякувати Максиму Кравченку за тренерську роботу, пояснить, покаже, розкаже, дасть поради та рекомендації, все дуже професійно! Буду ходити однозначно!', stars: 5, id: 3 },
		{ name: 'Макс', title: 'Є свої плюси та мінуси', body: 'Ходжу сюди не так довго (місяців 6 приблизно) і можу вже сказати головні плюси цього фітнес-клубу. Це чудові тренери і дружний колектив. Завдяки Руслану Ковалю я зміг скинути цілих 10 кілограмів і за його програмою сильно накачав тіло. Так само отримав нові знайомства, але завжди є зворотний бік медалі. Оскільки клуб працює давно тут є багато старого обладнання також сам по собі він досить великий і в день сюди ходять по сотні людей і дуже часто ламається обладнання а лагодять його зовсім не швидко', stars: 4, id: 4 },
		{ name: 'Євгеній Манченко', title: 'Ціна...', body: 'Ціна вища за середню, але за такі гроші можна було б і краще... Тренажери в дуже поганому стані, завжди багатолюдно. Добре тільки те, що в центрі міста і не потрібно далеко йти.', stars: 3, id: 5 },
		{ name: 'Юрій', title: '', body: 'Чудовий спортивно оздоровчий клуб', stars: 5, id: 6 },
		{ name: 'LIL1990', title: 'Все дуже жахливо!!!', body: 'Роздягальні не зручні, сиро в приміщенні, бігові доріжки з обмеженою вантажопідйомністю (100 кг)', stars: 2, id: 7 }
	])
	const createReview = newReview => {
		setReviews([...reviews, newReview])
	}
	const [sortOptionUpStyle, setSortOptionUpStyle] = useState()
	const [sortOptionDownStyle, setSortOptionDownStyle] = useState()
	const sortUpFunction = () => {
		setSortVisible(false)
		setReviews([...reviews].sort((a, b) => a['stars'] - b['stars']))
		setSortOptionUpStyle({pointerEvents: 'none', color: 'rgb(150, 5, 50)', background : 'rgb(250, 250, 250)', fontWeight : '700'})
		setSortOptionDownStyle({})
	}
	const sortDownFunction = () => {
		setSortVisible(false)
		setReviews([...reviews].sort((a, b) => a['stars'] - b['stars']).reverse())
		setSortOptionUpStyle({})
		setSortOptionDownStyle({pointerEvents: 'none', color: 'rgb(150, 5, 50)', background : 'rgb(250, 250, 250)', fontWeight : '700'})
	}
	return (
		<section className={cl.section}>
			<h2>Відгуки</h2>
			<div className={cl.btns_holder}>
				<button onClick={() => setModal(true)} className={cl.btn}>Залишити відгук</button>
				<button className={cl.btn} onClick={() => setSortVisible(!sortVisible)}>Сортувати</button>
				<div className={sortOptionsClasses.join(' ')}>
					<p style={sortOptionDownStyle} className={cl.sort_option} onClick={() => sortDownFunction()}>Від вищої оцінки</p>
					<p style={sortOptionUpStyle} className={cl.sort_option} onClick={() => sortUpFunction()}>Від нижчої оцінки</p>
				</div>
			</div>
			{reviews.length
				? reviews.map((review) =>
					<Review reviewData={review} key={review.id} />
				)
				: <h2>Коментарів немає</h2>
			}
			<MyReviewModal create={createReview} visible={modal} setVisible={setModal} />
		</section>
	)
}

export default ReviewsSection 