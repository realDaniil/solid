import React, { useEffect, useState } from 'react'
import Alyona4 from '../../../img/coaches/Alyona4.jpg'
import Maksim from '../../../img/coaches/Maksim.jpg'
import Alexei3 from '../../../img/coaches/Alexei3.jpg'
import Ruslan2 from '../../../img/coaches/Ruslan2.jpg'
import Svetlana from '../../../img/coaches/Svetlana.jpg'
import Vladimir from '../../../img/coaches/Vladimir.jpg'
import CoachesCard from './coachesCard/CoachesCard'
import MyImgModal from '../../UI/myImgModal/MyImgModal'
import cl from './CoachesSection.module.css'

function Coaches() {
	const [modal, setModal] = useState(false)
	const [img, setImg] = useState()
	const openImg = (e) => {
		if (e.target.tagName === 'IMG') {
			setImg(e.target.src)
			setModal(true)
		}
	}
	return (
		<section className={cl.section} onClick={(e) => {
			openImg(e)
		}}>
			<h2>НАШІ ТРЕНЕРИ</h2>
			<CoachesCard
				position={0}
				image={Alyona4}
				fullName={'АЛЬОНА САВРАНЕНКО - ПЕРСОНАЛЬНИЙ ТРЕНЕР 3 КАТЕГОРІЇ, ТРЕНЕР З TRX І ГРУПОВИХ ЗАНЯТЬ'}
				phone='+З8(097)12080171'
				about='Стаж у спорті - понад 7 років. Досвід тренерства - 5,5 років. Майстер спорту з пауерліфтингу (жим лежачи) Дворазова чемпіонка України. Багаторазова призерка національних стартів.  Сертифікація онлайн-курсу Массачусетського університету з анатомії. Сертифікація з функціонального тренінгу з гирями, канатами і сендбегом.'
			/>
			<CoachesCard
				position={1}
				image={Maksim}
				fullName={'МАКСИМ КРАВЧЕНКО - ПЕРСОНАЛЬНИЙ ТРЕНЕР 2 КАТЕГОРІЇ, CROSSFIT - ТРЕНЕР, CROSSFIT KIDS - ТРЕНЕР'}
				phone='+З8(067)42910171'
				about='МС України з важкої атлетики. 3-х кратний чемпіон України серед юніорів до 20 років. 2-х кратний срібний призер чемпіонату України серед чоловіків. Бронзовий призер чемпіонату України серед чоловіків. Учасник міжнародного турніру з кросфіту "banda open games 2018". Закінчив Національний Університет Кораблебудування (НУК) ім. Адмірала Макарова, кафедра теоретичних основ олімпійських видів спорту, спеціальність "тренер зі спорту, викладач фіз. виховання". Стаж роботи 14 років.'
			/>
			<CoachesCard
				position={0}
				image={Alexei3}
				fullName={'АЛЕКСІЙ ОЛІЙНИК - ТРЕНЕР 1 КАТЕГОРІЇ'}
				phone='+З8(063)32085590'
				about='Сертифікований тренер ТРХ STC, GTS; CrossFit anatomy course, учасник International Kyiv Sport Summit.'
			/>
			<CoachesCard
				position={1}
				image={Ruslan2}
				fullName={'РУСЛАН КОВАЛЬ - ТРЕНЕР ГРУПОВИХ ЗАНЯТЬ (PUMP, POWER STEP)'}
				phone='+З8(099)06423292'
				about='Стаж роботи 10 років. МС України з пауерліфтингу.  3-х кратний бронзовий призер чемпіонату України серед чоловіків. Золотий призер чемпіонату України серед чоловіків.  Учасник International Kyiv Sport Summit. Сертифікація Functional Stability.'
			/>
			<CoachesCard
				position={0}
				image={Svetlana}
				fullName={'СВІТЛАНА ХАРЧЕНКО - ТРЕНЕР ГРУППОВЫХ ЗАНЯТИЙ'}
				phone='+З8(095)42234170'
				about='Досвід тренувань понад 6 років. Досвід роботи персональним тренером - 4 роки Сертифікований персональний тренер тренажерного залу. СЕРТИФІКАТИ: Функціональний тренінг TRX FTC Онлайн сертифікація: 1) Functional Stability, 2) Mobility and stability in the functional training of athletes, 3) A modern view of the mechanisms of energy supply of muscle activity. Завжди в процесі навчання та саморозвитку.'
			/>
			<CoachesCard
				position={1}
				image={Vladimir}
				fullName={'ВОЛОДИМИР БОЙКО - ПЕРСОНАЛЬНИЙ ТРЕНЕР 2 КАТЕГОРІЇ'}
				phone='+З8(066)14633407'
				about='Закінчив ВНЗ "Міжнародний технологічний університет "Миколаївська політехніка" Освіта: фізичний реабілітолог. Стаж роботи: 4 роки в медичному центрі. Стаж заняття спортом більше 10 років. Досягнення: коричневий пояс із джиу-джитсу.'
			/>
			<MyImgModal visible={modal} setVisible={setModal} image={img} />
		</section>
	)
}

export default Coaches