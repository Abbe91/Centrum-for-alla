import React from "react";
import image2 from "../utils/images/seoimages/digitalMarketing.webp"; // Make sure you have an image for the consultation section
import useStyles from "./FreeConsultationStyles"; // Import the styles from a separate file

const FreeConsultation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.textSection}>
        <h2 className={classes.title}>Kostnadsfri One-on-One Samtal</h2>
        <div className={classes.divider}></div>
        <p className={classes.para}>
          Vi på Centrum för Alla erbjuder <strong>kostnadsfria</strong> one-on-one samtal
          för att hjälpa dig med alla dina marknadsföringsbehov. Oavsett om du
          behöver hjälp med digital marknadsföring, SEO optimering, sociala medier,
          eller innehållsskapande, så finns vi här för att stödja dig. Under samtalet
          kommer vi att diskutera dina mål och behov för att skapa en skräddarsydd
          strategi som maximerar din digitala närvaro. Boka ett samtal med oss idag
          för att få en offert och börja din resa mot framgång.
        </p>
      </section>
      <section className={classes.imageSection}>
        <img src={image2} className={classes.image} loading="lazy" alt="consultation" />
      </section>
    </div>
  );
};

export default FreeConsultation;
