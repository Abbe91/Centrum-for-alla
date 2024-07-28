import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: "3rem",
   background: "linear-gradient(to top, #00a7ac, #00a7ac)",
   fontFamily: "'Arial', sans-serif",
   color: "#2c3e50",
   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
 },
 title: {
   textAlign: "center",
   color: "#ffffff",
   fontSize: "2rem",
   marginBottom: "1.5rem",
   textTransform: "uppercase",
   letterSpacing: "1px",
   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
   "@media screen and (max-width: 800px)": {
     fontSize: "1.8rem",
   },
 },
 contentContainer: {
   display: "flex",
   justifyContent: "space-between",
   width: "100%",
   "@media screen and (max-width: 800px)": {
     flexDirection: "column",
     alignItems: "center",
   },
 },
 sec1: {
   flex: "1",
   maxWidth: "600px",
   backgroundColor: "#ffffff",
   padding: "1.5rem",
   borderRadius: "10px",
   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
   marginRight: "1rem",
   "@media screen and (max-width: 800px)": {
     marginBottom: "1rem",
     marginRight: "0",
   },
 },
 lottieContainer: {
   flex: "1",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#ffffff",
   padding: "1.5rem",
   borderRadius: "10px",
   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
 },
 paragraph: {
   lineHeight: "28px",
   fontSize: "0.9rem",
   margin: "0 auto",
   color: "#2c3e50",
   textAlign: "left",
   "@media screen and (max-width: 800px)": {
     fontSize: "0.9rem",
   },
 },
 link: {
   color: "#00a7ac",
   textDecoration: "none",
 },
});
const HelhetslosningImg = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="helhet">
      <h2 className={classes.title}>Marknadsföring & Digital Närvaro</h2>
      <div className={classes.contentContainer}>
        <section className={classes.sec1}>
          <h4 className={classes.title2}>Helhetslösning för digital marknadsföring</h4>
          <p className={classes.paragraph}>
            Vår helhetslösning erbjuder skräddarsydda digitala marknadsföringstjänster för att maximera din synlighet och tillväxt online. Vi tar hand om allt från strategi och skapande av webbsidor till implementering och kontinuerlig optimering för att säkerställa att ditt företag når sin fulla potential på över 200 centrumdomäner över hela Sverige. Kontakta oss idag för att diskutera hur vi kan hjälpa dig att stärka din digitala närvaro och locka fler kunder till ditt företag. För mer information om våra tjänster, besök vår sida om{" "}
            <a href="/tjanster" className={classes.link} title="våra tjänster">
              våra tjänster
            </a>{" "}
            eller läs mer om{" "}
            <a
              href="/tjanst/helhetslosning-digital-marknadsforing"
              className={classes.link}
              title="helhetslösning för digital marknadsföring"
            >
              helhetslösning för digital marknadsföring
            </a>.
          </p>
        </section>
        <section className={classes.lottieContainer}>
          <LottieBooking lotti={partners} height={300} width={400} />
        </section>
      </div>
    </div>
  );
};

export default HelhetslosningImg;
