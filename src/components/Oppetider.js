
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../utils/animation/opening-hours.json";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
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
  divider: {
    margin: "0.7rem auto",
    width: "45%",
    background: "#0369a1",
    height: "1px"
  }
});

const LottieBooking = ({ lotti, height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

const Oppetider = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="oppetider">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Öppetider
      </Typography>
      <Box className={classes.divider}></Box>
      <ul>
        <li>Måndag 07:00-20:00</li>
        <li>Tisdag 07:00-20:00</li>
        <li>Onsdag 07:00-20:00</li>
        <li>Torsdag 07:00-20:00</li>
        <li>Fredag 07:00-20:00</li>
        <li>Lördag 10:00-20:00</li>
        <li>Söndag 10:00-20:00</li>
      </ul>
      <LottieBooking lotti={animationData} height={300} width={300} />
    </div>
  );
};

export default Oppetider;