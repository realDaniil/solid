import React, { useRef, useState } from 'react'
import classes from './MyImgModal.module.css'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'

function MyImgModal({ children, visible, setVisible, image }) {
	const modalClasses = [classes.myModal]
	const [zoomCount, setZoomCount] = useState(1)
	function zoomFunction(e, sign) {
		e.stopPropagation()
		setZoomCount(prev => prev + sign)
		if (zoomCount <= 0.5 || zoomCount >= 10) {
			setZoomCount(1)
		}
	}
	if (visible) modalClasses.push(classes.active)
	return (
		<div className={modalClasses.join(' ')}
			onClick={() => {
				setVisible(false)
				setZoomCount(1)
			}}>
			<div className={classes.zoomHolder}>
				<AiOutlineZoomOut className={classes.zoomBtn} onClick={e => zoomFunction(e, -0.4)} />
				<AiOutlineZoomIn className={classes.zoomBtn} onClick={e => zoomFunction(e, 0.4)} />
			</div>
			<IoMdClose className={classes.closeBtn} onClick={() => {
				setVisible(false)
				setZoomCount(1)
			}} />
			<div className={classes.modalImage_holder}>
				<img src={image} alt="" style={{ transform: `scale(${zoomCount})`, cursor: 'default' }} className={classes.modalImage} 
					onClick={e => e.stopPropagation()} 
				/>
			</div>
		</div>
	)
}

export default MyImgModal