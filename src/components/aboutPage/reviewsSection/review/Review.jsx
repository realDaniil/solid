import React from 'react'
import cl from './Review.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import Stars from '../../../UI/stars/Stars'

function Review(props) {
	return (
		<div className={cl.review}>
			<div className={cl.header}>
				<div className={cl.user_info_holder}>
					<AiOutlineUser className={cl.avatar} />
					<h4>{props.reviewData.name}</h4>
				</div>
				<Stars stars={props.reviewData.stars} />
			</div>
			<h3>{props.reviewData.title}</h3>
			<p className={cl.body}>{props.reviewData.body}</p>
			<div className={cl.starHolder}>{
			}
			</div>
		</div>
	)
}

export default Review