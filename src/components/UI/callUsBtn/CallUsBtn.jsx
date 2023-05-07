import React, { useEffect, useRef, useState } from 'react'
import cl from './CallUsBtn.module.css'
import { IoMdClose } from 'react-icons/io'

function CallUsBtn() {
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const [callUsBtnPosition, setAnchorPosition] = useState()
	if (1.6 * window.innerHeight <= scrollPosition && callUsBtnPosition !== 20) {
		setAnchorPosition(20)
	} else if (window.innerHeight > scrollPosition && callUsBtnPosition !== -200) {
		setAnchorPosition(-200)
	}

	const modalClasses = [cl.callUsModal]
	const [visible, setVisible] = useState(false)
	if (visible) modalClasses.push(cl.active)

	const btnClasses = [cl.modalBtn]
	const [fullInput, setFullInput] = useState(false)
	if (fullInput) btnClasses.push(cl.active)
	const inputCheck = e => {
		if (e.target.value.length === 10 && btnText === 'Зателефонуйте') setFullInput(true)
		else setFullInput(false)
		e.target.value = e.target.value.replace(/[^\d.]/g, '')
	}

	const [seconds, setSeconds] = useState(30);
	const [timerActive, setTimerActive] = useState(false);
	useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else {
			setTimerActive(false);
		}
	}, [seconds, timerActive]);
	const [btnText, setBtnText] = useState('Зателефонуйте')
	const inputRef = useRef()
	return (
		<>
			<div style={{ left: callUsBtnPosition }} onClick={() => setVisible(true)} className={cl.btnHolder}>
				<button className={cl.btn}>Кнопка зв'язку</button>
			</div>
			<div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
				<div className={cl.modalContentHolder} onClick={e => e.stopPropagation()}>
					<IoMdClose className={cl.closeBtn} onClick={() => setVisible(false)} />
					<p className={cl.title}>Хочете, зателефонуємо Вам через 30 секунд?</p>
					<div className={cl.inputHolder}>
						<input maxLength={10} onInput={e => inputCheck(e)} ref={inputRef} className={cl.modalInput} type="tel" placeholder='Ваш номер телефону' />
						<button className={btnClasses.join(' ')} onClick={() => {
							if (fullInput) {
								inputRef.current.style.pointerEvents = 'none'
								setTimerActive(true)
								setBtnText('Ми зараз вам зателефонуємо')
								setFullInput(false)
							}
						}}>{btnText}</button>
						<p className={cl.timer}>{seconds ? <>{seconds}</> : <></>}</p>
					</div>
					<p>Наприклад: 067 123 45 67</p>
					<p className={cl.otherP}>Вільних операторів на лінії: 3</p>
					<p className={cl.otherP}>Дзвінків за сьогодні: 20+</p>
				</div>
			</div>
		</>
	)
}

export default CallUsBtn