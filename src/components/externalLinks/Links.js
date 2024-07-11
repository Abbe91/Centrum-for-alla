import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    color: "black",
    marginTop: "4rem",
    width: "80%",
    textAlign: "center"
  },
  links: {
    color: "#0369a1",
    borderBottom: "1px solid black",
    fontSize: "0.8rem"
  },

  container: {
    marginTop: "0.5rem",
    "&:hover": {
      fontWeight: "bold"
    }
  }
});
const urls = [
  {
    path: "https://www.paloma.se/blogg/guide-till-digital-marknadsforing-for-smaforetagare/",
    title: "Digital Marknadsföring Guide"
  },
  {
    path: "https://bonzer.se/blogg/saa-skapar-du-en-seo-strategi-som-gynnar-ditt-foretag-2022-guide",
    title: "SEO Strategier och Taktik"
  },
  {
    path: "https://corporate.visitsweden.com/kunskap/kanaler/digitala-kanaler/sociala-medier-och-inspiration/6-steg-for-att-lyckas-med-att-marknadsfora-i-sociala-medier/",
    title: "Sociala Medier Marknadsföring Tips"
  }
];
const Links = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p style={{ fontSize: "0.8rem", opacity: "0.75" }}>
        Bra länkar och information kring Marknadsföring
      </p>
      {urls?.map((url, i) => (
        <div key={i} className={classes.container}>
          <a
            href={url.path}
            target="_blank"
            className={classes.links}
            rel="noreferrer"
          >
            {url.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
