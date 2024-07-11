import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";

const Partners = () => {
  return (
    <div className="partners">
      <section>
        <h2 style={{ color: "black" }}>Marknadsföring & Digital Närvaro</h2>
        <h4 style={{ margin: "0.5rem 0" }}>- Partners -</h4>
        <ul>
          <p style={{ margin: "1rem 0" }}>
            Vi på <strong>Centrum för Alla</strong> samarbetar med en rad partners för att kunna erbjuda dig en heltäckande tjänst inom marknadsföring och digital närvaro. Bland våra samarbetspartners finns:
          </p>
          <li
            style={{ color: "#4890e3", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            - DigitalTech.se
          </li>
          <li
            style={{ color: "#4890e3", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            - Webbutveckling och Design
          </li>
          <li
            style={{ color: "#4890e3", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            - Sociala Medier Marknadsföring
          </li>
          <li
            style={{ color: "#4890e3", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            - SEO och SEM Experter
          </li>
          <li
            style={{ color: "#4890e3", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            - Innehållsskapare och Copywriters
          </li>
        </ul>
      </section>
      <section>
        <LottieBooking lotti={partners} height={300} width={400} />
      </section>
    </div>
  );
};

export default Partners;
