import React from "react";
import classes from './AboutWelcomeSection.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutWelcomeSection() {
  AOS.init();
  return (
      <section className={classes.section}>
        <div data-aos="fade-down" data-aos-delay="400" data-aos-offset="0" className={classes.section_children}>
          <h2 classes={{fontSize: '40px'}}>Про нас</h2>
          <h3>SOLID</h3>
        </div>
      </section>
  );
}

export default AboutWelcomeSection;
