import React from "react";
import classes from './CoachesWelcomeSection.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function CoachesWelcomeSection() {
  AOS.init();
  return (
      <section className={classes.section}>
        <div data-aos="fade-down" data-aos-delay="400" data-aos-offset="0" className={classes.section_children}>
          <h3>Приємні та чуйні співробітники, висококласні тренери, професіонали подбають про те, щоб Ваші тренування проходили з якомога приємнішою та позитивнішою атмосферою, а блискавичний прогрес радував день у день.
            </h3>
        </div>
      </section>
  );
}

export default CoachesWelcomeSection;
