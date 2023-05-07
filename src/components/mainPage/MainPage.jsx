import React from "react";
import About from "./about/About";
import CardsSection from "./cardsSection/CardsSection";
import Partners from "./partners/Partners";
import WelcomeSection from "./welcomeSection/WelcomeSection";

function MainPage() {
  return (
      <div className="MainPage">
        <WelcomeSection />
        <About />
				<CardsSection />
        <Partners />
			</div>
  );
}

export default MainPage;
