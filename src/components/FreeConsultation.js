import React from "react";
import image2 from "../utils/images/seoimages/digitalMarketing.webp"; // Make sure you have an image for the consultation section
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    background: "#4890e3",
    justifyContent: "space-evenly",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column"
    }
  },
  para: {
    margin: "0.5rem 0",
    letterSpacing: "1px",
    lineHeight: "27px",
    maxWidth: "500px",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem"
    }
  }
});

const FreeConsultation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section style={{ margin: "1rem 0" }}>
        <h2 style={{ color: "white" }}>Kostnadsfri One-on-One Samtal</h2>
        <div
          style={{
            margin: "0.7rem auto",
            width: "45%",
            background: "#0369a1",
            height: "1px"
          }}
        ></div>
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
      <section style={{ margin: "1rem 0", borderRadius: "50%" }}>
        <img src={image2} className="besok-img" loading="lazy" alt="consultation" />
      </section>
    </div>
  );
};

export default FreeConsultation;
