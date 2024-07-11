import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "3rem",
    flexDirection: "row",
    background: "#4890e3",
    margin: "0 0.5rem",
    color: "white",
    justifyContent: "space-evenly",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      textAlign: "center"
    }
  },
  sec1: {
    marginBottom: "1rem"
  },
  sec2: {
    marginBottom: "2rem"
  },
  paragraph: {
    lineHeight: "28px",
    fontSize: "0.9rem",
    margin: "0 auto",
    "@media screen and (min-width: 800px)": {
      width: "400px"
    }
  },
  title: {
    color: "white",
    marginBottom: "0.5rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    background: "#4890e3",
    color: "white",
    border: "none",
    height: "2rem",
    borderRadius: "5px",
    marginTop: "0.3rem",
    fontWeight: "bold"
  },
  input: {
    height: "2rem",
    marginBottom: "0.3rem",
    width: "100%"
  }
});

const Helhetslosningdodsbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="helhet">
  <section className={classes.sec1}>
    <h2 className={classes.title}>Helhetslösning för digital marknadsföring</h2>
    <p className={classes.paragraph}>
      Vår helhetslösning erbjuder skräddarsydda digitala marknadsföringstjänster för att maximera din synlighet och tillväxt online. Vi tar hand om allt från strategi och skapande av webbsidor till implementering och kontinuerlig optimering för att säkerställa att ditt företag når sin fulla potential på över 200 centrumdomäner över hela Sverige. Kontakta oss idag för att diskutera hur vi kan hjälpa dig att stärka din digitala närvaro och locka fler kunder till ditt företag. För mer information om våra tjänster, besök vår sida om{" "}
      <a href="/tjanster" style={{ color: "white" }} title="våra tjänster">
        våra tjänster
      </a>{" "}
      eller läs mer om{" "}
      <a
        href="/tjanst/helhetslosning-digital-marknadsforing"
        style={{ color: "white" }}
        title="helhetslösning för digital marknadsföring"
      >
        helhetslösning för digital marknadsföring
      </a>.
    </p>
  </section>
</div>

  );
};

export default Helhetslosningdodsbo;
