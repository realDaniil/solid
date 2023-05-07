import React from "react";
import classes from './ShopWelcomeSection.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ShopWelcomeSection() {
  AOS.init();
  return (
      <section className={classes.section}>
        <div data-aos="fade-down" data-aos-delay="400" data-aos-offset="0" className={classes.section_children}>
          <h2 classes={{fontSize: '40px'}}>Магазин</h2>
          <h3>Абонементи та мерч</h3>
        </div>
      </section>
  );
}

export default ShopWelcomeSection;
