import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import errorImage from "../../utils/images/logo-centrum-for-alla.webp";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#00a7ac",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  image: {
    width: "300px",
    height: "300px",
    marginBottom: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "#00a7ac",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={errorImage} alt="Error" className={classes.image} />
      <h1 className={classes.title}>404</h1>
      <h2 className={classes.subtitle}>Sidan kunde inte hittas</h2>
      <p>Vi beklagar, men sidan du letar efter finns inte.</p>
      <a href="/" className={classes.link}>
        Tillbaka till startsidan
      </a>
    </div>
  );
};

export default Error;
