import React from 'react'
import AboutWelcomeSection from './welcomeSection/AboutWelcomeSection'
import classes from './AboutPage.module.css'
import { BsCheckLg } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Gallery from './gallerySection/Gallery'
import ReviewsSection from './reviewsSection/ReviewsSection'

function AboutPage() {
	AOS.init()
	return (
		<div>
			<AboutWelcomeSection />
			<section data-aos="fade-up" className={classes.second_section}>
				<h2>ЯКИЙ ВІН, ІДЕАЛЬНИЙ ФІТНЕС-КЛУБ?</h2>
				<p>Fitness Stadium – більше, ніж просто фітнес-центр.</p>
				<p>І ні, ми не маємо на увазі його величезну площу більш ніж 5500 м2 і здатність вмістити одночасно понад 500 чоловік. Це дійсно саме те, чого вам так бракувало:</p>
				<div className={classes.item_holder}>
					<div className={classes.item}>
						<BsCheckLg />
						<p>УВАГА ДО ДЕТАЛЕЙ</p>
					</div>
					<div className={classes.item}>
						<BsCheckLg />
						<p>АТМОСФЕРА І СТИЛЬ</p>
					</div>
					<div className={classes.item}>
						<BsCheckLg />
						<p>ПРОСТІР ДЛЯ ТРЕНУВАНЬ</p>
					</div>
					<div className={classes.item}>
						<BsCheckLg />
						<p>ДОСТУПНІСТЬ І ЗРУЧНІСТЬ</p>
					</div>
				</div>
			</section>
			<Gallery />
			<ReviewsSection />
		</div>
	)
}

export default AboutPage