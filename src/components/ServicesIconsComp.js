import React from "react";
import { makeStyles } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

const services = [
  {
    title: "Digital Marknadsföring",
    path: "digital-marknadsforing",
  },
  {
    title: "SEO Optimering",
    path: "seo-optimering",
  },
  {
    title: "Sociala Medier Hantering",
    path: "sociala-medier",
  },
  {
    title: "Innehållsskapande",
    path: "innehallsskapande",
  },
  {
    title: "Webbdesign och Utveckling",
    path: "webbdesign",
  },
  {
    title: "Email Marknadsföring",
    path: "email-marknadsforing",
  },
  {
    title: "Kostnadsfri Rådgivning",
    path: "kostnadsfri-radgivning",
  }
];

const useStyles = makeStyles({
  services: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  },
  btn: {
    background: "#00a7ac",
    color: "white",
    border: "none",
    fontSize: "0.7rem",
    width: "6.5rem",
    height: "2rem",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    "&:hover": {
      opacity: 0.9
    }
  },
  btnContainer: {
    textAlign: "center",
    margin: "1.2rem 0.2rem"
  },
  root: {
    padding: "2rem"
  },
  btntitle: {
    margin: "0.2rem 0"
  }
});
const ServicesIconsComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section
        style={{ textAlign: "center", margin: "1rem 0", lineHeight: "26px" }}
      >
        <h2 className={classes.title}>Vad behöver du hjälp med?</h2>
        <p
          style={{
            maxWidth: window.innerWidth > 740 ? "70%" : "360px",
            margin: "0.5rem auto",
            fontSize: "0.8rem"
          }}
        >
           Vi på Centrum för Alla erbjuder ett brett utbud av digitala
        marknadsföringstjänster för att hjälpa ditt företag växa online. Oavsett
        om du behöver förbättra din synlighet på webben, optimera din webbplats
        för sökmotorer (SEO), hantera dina sociala medier, skapa engagerande
        innehåll, utveckla en attraktiv webbdesign, genomföra effektiv
        e-postmarknadsföring eller bara behöver kostnadsfri rådgivning – vi är
        här för att hjälpa dig.
        </p>
      </section>

      <section className={classes.services}>
        {services?.map((service, i) => {
          return (
            <div key={i} className={classes.btnContainer}>
              <button variant="contained" className={classes.btn}>
                <a
                  href={service.path}
                  title={service.title}
                  className={classes.btn}
                  style={{ color: "white" }}
                >
                  {service.title}
                </a>
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ServicesIconsComp;
