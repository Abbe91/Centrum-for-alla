import React from "react";
import { makeStyles } from "@material-ui/core";
import digitalMarketing from "../utils/images/seoimages/digitalMarketing.webp";
import seoOptimization from "../utils/images/seoimages/seoOptimization.webp";
import socialMedia from "../utils/images/seoimages/socialMedia.jpg";
import webDevelopment from "../utils/images/seoimages/webDevelopment.jpg";
import contentCreation from "../utils/images/seoimages/contentCreation.webp";
import emailMarketing from "../utils/images/seoimages/emailMarketing.webp";
import ppcAdvertising from "../utils/images/seoimages/ppcAdvertising.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const useStyles = makeStyles({
  root: {
    background: "white",
    height: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    alignItems: "center"
  },
  imageContainer: {
    margin: "0.5rem 0.5rem"
  },
  btn: {
    width: "100%",
    height: "2rem",
    background: "#4890e3",
    fontWeight: "bold",
    color: "white",
    border: "none",
    borderRadius: "5px",
    margin: "0.5rem auto",
    padding: "0.3rem"
  },
  images: {
    backgroundPosition: "center",
    objectFit: "cover"
  }
});
const images = [
  { url: digitalMarketing, text: "Digital Marknadsföring", path: "/digital-marknadsforing" },
  { url: seoOptimization, text: "SEO Optimering", path: "/seo-optimering" },
  { url: socialMedia, text: "Sociala Medier", path: "/sociala-medier" },
  { url: webDevelopment, text: "Webbutveckling", path: "/webbutveckling" },
  { url: contentCreation, text: "Innehållsskapande", path: "/innehallsskapande" },
  { url: emailMarketing, text: "E-postmarknadsföring", path: "/e-postmarknadsforing" },
  { url: ppcAdvertising, text: "PPC Annonsering", path: "/ppc-annonsering" }
];

const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images?.map((image, i) => (
        <div key={i} className={classes.imageContainer}>
          <LazyLoadImage
            src={image.url}
            alt={image.text}
            height={"200px"}
            width={"200px"}
            className={classes.images}
          />
          <a href={image.path} title={image.text}>
            <button className={classes.btn}>{image.text}</button>
          </a>
        </div>
      ))}
    </div>
  );
};


export default ImagesServicesComponent;
