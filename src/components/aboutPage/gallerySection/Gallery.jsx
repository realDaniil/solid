import React, { useState } from 'react'
import classes from './Gallery.module.css'
import image from '../../../img/gallery/gallery.jpg'
import image2 from '../../../img/gallery/gallery2.jpg'
import image3 from '../../../img/gallery/gallery3.jpg'
import image4 from '../../../img/gallery/gallery4.jpg'
import image5 from '../../../img/gallery/gallery5.jpg'
import image6 from '../../../img/gallery/gallery6.jpg'
import image7 from '../../../img/gallery/gallery7.jpg'
import image8 from '../../../img/gallery/gallery8.jpg'
import MyImgModal from '../../UI/myImgModal/MyImgModal'

function Gallery() {
	const [modal, setModal] = useState(false)
	const [img, setImg] = useState()
	const openImg = (e) => {
		if (e.target.tagName === 'IMG') {
			setImg(e.target.src)
			setModal(true)
		}
	}
	return (
		<section className={classes.section}>
			<h2>ГАЛЕРЕЯ</h2>
			<div className={classes.images_holer} onClick={e => {
				openImg(e)
			}}>
				<img src={image} alt="" />
				<img src={image2} alt="" />
				<img src={image3} alt="" />
				<img src={image4} alt="" />
				<img src={image5} alt="" />
				<img src={image6} alt="" />
				<img src={image7} alt="" />
				<img src={image8} alt="" />
			</div>
			<MyImgModal visible={modal} setVisible={setModal} image={img} />
		</section>
	)
}

export default Gallery