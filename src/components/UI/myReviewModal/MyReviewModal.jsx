import React, { useRef, useState } from 'react';
import cl from './MyReviewModal.module.css'
import { IoMdClose } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'

const MyReviewModal = ({ visible, setVisible, create }) => {
    const [review, setReview] = useState({ name: '', title: '', body: '', stars: 5 })
    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }
    const checkTextRef = useRef(null)
    const inputCheckFunction = e => {
        checkTextRef.current.style.display = 'none'
        if (e.target.value[0] === ' ') {
            e.target.value = e.target.value.slice(1)
        }
    }
    const addNewReview = () => {
        const newReview = {
            ...review, id: Date.now()
        }
        create(newReview)
        setReview({ name: '', title: '', body: '', stars: 5 })
        for (let i = 0; i < 5; i++) {
            starsHolderRef.current.children[i].style.color = '#C3073F'
        }
        setVisible(false)
    }
    const sendingCheckFunction = () => {
        if (review.name === '' || review.body === '') {
            checkTextRef.current.style.display = 'block'
        } else addNewReview()
    }
    const starsHolderRef = useRef(null)
    const starsFunction = number => {
        setReview({ ...review, stars: number })
        for (let i = 0; i < starsHolderRef.current.children.length; i++) {
            starsHolderRef.current.children[i].style.color = 'grey'
        }
        for (let i = 0; i < number; i++) {
            starsHolderRef.current.children[i].style.color = '#C3073F'
        }
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
                <div className={cl.top_bar}>
                    <h3>Залишити відгук</h3>
                    <IoMdClose className={cl.closeBtn} onClick={() => setVisible(false)} />
                </div>
                <input type="text" value={review.title}
                    onChange={e => {
                        inputCheckFunction(e)
                        setReview({ ...review, title: e.target.value })
                    }}
                    className={cl.firstInput}
                    placeholder="Заголовок відгуку"
                />  
                <textarea type="text" value={review.body}
                    onChange={e => {
                        inputCheckFunction(e)
                        setReview({ ...review, body: e.target.value })
                    }}
                    className={cl.textarea}
                    placeholder="Ваш відгук"
                />
                <div className={cl.stars_holder} ref={starsHolderRef}>
                    <AiFillStar className={cl.star} onClick={() => starsFunction(1)} />
                    <AiFillStar className={cl.star} onClick={() => starsFunction(2)} />
                    <AiFillStar className={cl.star} onClick={() => starsFunction(3)} />
                    <AiFillStar className={cl.star} onClick={() => starsFunction(4)} />
                    <AiFillStar className={cl.star} onClick={() => starsFunction(5)} />
                </div>
                <div className={cl.bottom_bar}>
                    <input type="text" value={review.name}
                        onChange={e => {
                            inputCheckFunction(e)
                            setReview({ ...review, name: e.target.value })
                        }}
                        className={cl.secondInput}
                        placeholder="Ваше ім'я"
                    />
                    <button onClick={() => sendingCheckFunction()}>Відправити відгук</button>
                    <p ref={checkTextRef} className={cl.checkText}>Заповніть всі поля!</p>
                </div>
            </div>
        </div>
    );
};

export default MyReviewModal;