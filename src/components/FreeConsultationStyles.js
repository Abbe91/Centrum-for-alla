import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
    },
  },
  textSection: {
    margin: "1rem 0",
    maxWidth: "500px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  divider: {
    margin: "0.7rem auto",
    width: "45%",
    background: "#0369a1",
    height: "2px",
  },
  para: {
    margin: "0.5rem 0",
    letterSpacing: "1px",
    lineHeight: "27px",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem",
    },
  },
  imageSection: {
    margin: "1rem 0",
    borderRadius: "50%",
  },
  image: {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
});

export default useStyles;
