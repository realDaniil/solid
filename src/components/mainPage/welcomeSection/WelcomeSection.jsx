import React from "react";
import cl from './WelcomeSection.module.css'
import video from '../../../video/solidVideo.mp4'
import poster from '../../../video/solidPoster.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WelcomeSection() {
  AOS.init();
  return (
    <section className={cl.section}>
      <div className={cl.video_holder}>
        <video preload='auto' autoPlay muted loop poster={poster} className={cl.video} src={video}></video>
      </div>
      <div className={cl.section_children}>
        <div data-aos="fade-down" data-aos-delay="400" data-aos-offset="0" className={cl.textHolder}>
          <h2>Сьогодні – твоє завтра</h2>
          <h3>SOLID - найкращий спосіб стати сильнішим</h3>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
