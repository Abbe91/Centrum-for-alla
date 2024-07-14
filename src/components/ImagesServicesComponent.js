import React from "react";
import useStyles from "./HelhetslosningMarketing"; // Import styles from the separate file

const Helhetslosningdodsbo = () => {
  const classes = useStyles(); // Use useStyles to get styles

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
