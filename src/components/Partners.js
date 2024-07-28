import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-title">Marknadsföring & Digital Närvaro</h2>
      <div className="partners">
        <section className="partners-content">
          <h4>- Partners -</h4>
          <p>
            Vi på <strong>Centrum för Alla</strong> samarbetar med en rad partners för att kunna erbjuda dig en heltäckande tjänst inom marknadsföring och digital närvaro. Bland våra samarbetspartners finns:
          </p>
          <ul>
            <li>- DigitalTech.se</li>
            <li>- Webbutveckling och Design</li>
            <li>- Sociala Medier Marknadsföring</li>
            <li>- SEO och SEM Experter</li>
            <li>- Innehållsskapare och Copywriters</li>
          </ul>
        </section>
        <section className="lottie-container">
          <LottieBooking lotti={partners} height={300} width={400} />
        </section>
      </div>
    </div>
  );
};

export default Partners;
