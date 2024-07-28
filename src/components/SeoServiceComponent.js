import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
const useStyles = makeStyles({
  root: {
    height: "460px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    alignItems: "center",
    textAlign: "center",
    margin: "3rem 0",
    transition: "all 0.3s linear",
    backgroundColor: "#00a7ac",
  },
  card: {
    height: "380px",
    width: "400px",
    margin: "0.5rem 0.5rem",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s linear",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
  },
  text: {
    maxWidth: "280px",
    marginLeft: "1rem",
    fontSize: "0.83rem",
    lineHeight: "24px"
  },
  atag: {
    color: "#4890e3",
    fontSize: "0.9rem",
    fontWeight: "bold"
  }
});
const services = [
  {
    title: "Digital Marknadsföring",
    path: "digital-marknadsforing",
    text: "Vi hjälper ditt företag att synas online genom strategisk digital marknadsföring. Vårt team kan skapa och genomföra kampanjer som ökar din synlighet, driver trafik till din hemsida och förbättrar din konverteringsgrad.",
    icon: <HomeWorkIcon />
  },
  {
    title: "SEO Optimering",
    path: "seo-optimering",
    text: "Vi erbjuder omfattande SEO-tjänster för att förbättra din hemsidas ranking på sökmotorer. Vår expertis inom sökordsoptimering, teknisk SEO och innehållsstrategi säkerställer att ditt företag syns högre i sökresultaten.",
    icon: <SearchIcon />
  },
  {
    title: "Sociala Medier Hantering",
    path: "sociala-medier",
    text: "Vår tjänst för sociala medier hantering hjälper dig att engagera din publik och bygga ett starkt varumärke på plattformar som Facebook, Instagram, LinkedIn och Twitter. Vi skapar och publicerar relevant innehåll samt hanterar interaktioner med dina följare.",
    icon: <FacebookIcon />
  },
  {
    title: "Innehållsskapande",
    path: "innehallsskapande",
    icon: <CreateIcon />,
    text: "Vi skapar engagerande och relevant innehåll för din hemsida, blogg, nyhetsbrev och sociala medier. Våra tjänster inkluderar copywriting, grafisk design och videoproduktion som hjälper ditt företag att kommunicera effektivt med din målgrupp."
  },
  {
    title: "Webbdesign och Utveckling",
    path: "webbdesign",
    icon: <WebIcon />,
    text: "Vi designar och utvecklar professionella, användarvänliga hemsidor som speglar ditt företags identitet. Våra webbplatser är optimerade för alla enheter och utformade för att ge bästa möjliga användarupplevelse."
  },
  {
    title: "Email Marknadsföring",
    path: "email-marknadsforing",
    icon: <EmailIcon />,
    text: "Med vår email marknadsföringstjänst kan du nå ut till dina kunder direkt i deras inkorg. Vi skapar och skickar målgruppsanpassade nyhetsbrev, kampanjer och uppföljningsmeddelanden som ökar din kundlojalitet och försäljning."
  },
  {
    title: "Kostnadsfri Rådgivning",
    icon: <PhoneIcon />,
    path: "kostnadsfri-radgivning",
    text: "Vi erbjuder kostnadsfri rådgivning för att diskutera dina marknadsföringsbehov och mål. Boka en tid med oss för att få skräddarsydda råd och en plan som hjälper ditt företag att växa och nå nya höjder."
  }
];
const SeoServiceComponent = () => {
  const classes = useStyles();
  const [active, setactive] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll("#element");
    elements.forEach((el) => {
      el.addEventListener("pointerover", (e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      });
    });
    elements.forEach((el) => {
      el.addEventListener("pointerleave", (e) => {
        e.currentTarget.style.transform = "scale(1)";
      });
    });
  });
  useEffect(() => {});
  return (
    <div className={classes.root}>
      {services.map((service, ind) => {
        return (
          <div
            key={ind}
            className={classes.card}
            style={{
              transform: ind === 0 && "scale(1.1)",
              marginRight: "1rem",
              marginLeft: "1rem"
            }}
            id="element"
          >
            {service.icon}
            <h5 style={{ width: "320px", color: "black", margin: "0.5rem 0" }}>
              {service.title}
            </h5>
            <p className={classes.text}>{service.text}</p>
            <a
              href={service.path}
              title={service.title}
              className={classes.atag}
            >
              Läs mer
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SeoServiceComponent;
