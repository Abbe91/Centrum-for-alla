import React from "react";
import { makeStyles, Card } from "@material-ui/core";
const locales = [
  { id: 3, city: "Göteborg" },
  { id: 0, city: "Kungälv" },
  { id: 1, city: "Ale" },
  { id: 2, city: "Kungsbacka" },
  { id: 4, city: "Frölunda" },
  { id: 5, city: "Hisingen" },
  { id: 6, city: "Härryda" },
  { id: 7, city: "Partille" },
  { id: 8, city: "Lerum" },
  { id: 9, city: "Borås" },
  { id: 10, city: "Angered" },
  { id: 11, city: "Agnesberg" },
  { id: 12, city: "Asperö" },
  { id: 13, city: "Torslanda" },
  { id: 14, city: "Bohus" },
  { id: 15, city: "Nödinge" },
  { id: 16, city: "Älvängen" },
  { id: 17, city: "Mölndal" },
  { id: 18, city: "Olofstorp" },
  { id: 19, city: "Säve" },
  { id: 20, city: "Västra Frölunda" },
  { id: 21, city: "Billdal" },
  { id: 22, city: "Hisings Kärra" },
  { id: 23, city: "Nol" },
  { id: 24, city: "Surte" },
  { id: 25, city: "Stenungsund" },
  { id: 26, city: "Tjörn" },
  { id: 27, city: "Gbg" },
  { id: 28, city: "Alingsås" },
  { id: 29, city: "Bengtfors" },
  { id: 30, city: "Trollhättan" },
  { id: 31, city: "Bollebygd" },
  { id: 32, city: "Falköping" },
  { id: 33, city: "Herrljunga" },
  { id: 34, city: "Uddevalla" },
  { id: 35, city: "Skepplanda" },
  { id: 36, city: "Lilla Edet" },
  { id: 37, city: "Hammarkullen" },
  { id: 38, city: "Biskop" },
  { id: 39, city: "Sävedalen" },
  { id: 40, city: "Munkebäck" },
  { id: 41, city: "Vasastan" },
  { id: 42, city: "Järntorget" },
  { id: 43, city: "Linnegatan" },
  { id: 44, city: "Högsbo" },
  { id: 45, city: "Landala" },
  { id: 46, city: "Johanneberg" },
  { id: 47, city: "Bergsjön" },
  { id: 48, city: "Redbergsplatsen" },
  { id: 49, city: "Örgryte" },
  { id: 50, city: "Tuve" },
  { id: 51, city: "Hjällbo" },
  { id: 52, city: "Majorna" },
  { id: 53, city: "Askim" },
  { id: 54, city: "Hovås" },
  { id: 60, city: "Ulricehamn" }
];
const useStyles = makeStyles({
  root: {
    display: "flex",
    overflowX: "scroll",
    width: "100%"
  },
  card: {
    width: "355px",
    margin: "1rem 1rem",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
const Seo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {locales?.map((local, i) => (
        <div className={classes.content} key={i}>
          <Card key={local.id} className={classes.card}>
            <h5 style={{ marginBottom: "0.4rem" }}>
            Marknadsföring & Digital Närvaro i{" "}
              {local.city}.
            </h5>
            <p style={{ fontSize: "0.75rem", lineHeight: "22px" }}>
              Välkommen till oss på Centrum för alla i {local.city} ! Vi börjar med en kostnadsfri analys av ditt företag och dina marknadsföringsbehov. Detta inkluderar en genomgång av din nuvarande online-närvaro och en diskussion om dina mål. Syftet med denna analys är att förstå dina specifika behov och att skapa en skräddarsydd strategi som maximera din synlighet och SEO. Kontakta oss för att boka en analys. Vi hjälper dig i{" "}
              {local.city}, allt inom marknadföreing i {local.city}, SEO i{" "}
              {local.city}, Digital Marknadsföring i {local.city} eller Webbdesign och Utveckling
              i {local.city}. Vi gör Email Marknadsföring inom hela {local.city} och
              dess närområden. i på Centrum för Alla erbjuder kostnadsfria one-on-one samtal för att hjälpa dig med alla dina marknadsföringsbehov. Oavsett om du behöver hjälp med digital marknadsföring, SEO optimering, sociala medier, eller innehållsskapande, så finns vi här för att stödja dig. Under samtalet kommer vi att diskutera dina mål och behov för att skapa en skräddarsydd strategi som maximerar din digitala närvaro. Boka ett samtal med oss idag för att få en offert och börja din resa mot framgång.
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Seo;
