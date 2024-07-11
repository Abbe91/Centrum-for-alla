import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "2rem",
    color: "white",
    // flexWrap: "wrap",
    background: "#4890e3"
    // "@media screen and (max-width: 1000px)": {
    //   flexDirection: "column"
    // }
  },
  rund: {
    width: "2.6rem",
    height: "2.6rem",
    margin: "0 auto",
    border: "1px solid white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Arbetsprocessen = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#4890e3", color: "white" }}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "2rem"
        }}
      >
        SÅ FUNGERAR DET
      </h2>
      <div className={classes.root}>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div id="analys">
            <div className={classes.rund}>
              <p>1</p>
            </div>
            <p style={{ width: "300px", marginTop: "0.5rem" }}>
              <strong style={{ color: "white" }}> Analys och Strategi:</strong>
              Vi börjar med en kostnadsfri analys av ditt företag och dina marknadsföringsbehov. Detta inkluderar en genomgång av din nuvarande online-närvaro och en diskussion om dina mål. Syftet med denna analys är att förstå dina specifika behov och att skapa en skräddarsydd strategi som maximera din synlighet och SEO.{" "}
              <a
                href="/kontakt"
                style={{ color: "white" }}
                title="kontakta oss"
              >
                Kontakta oss
              </a>{" "}
              för att boka en analys.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="Team som diskuterar vid ett konferensbord"
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <div
              className={classes.rund}
              style={{ marginTop: "0.5rem" }}
              id="skapande"
            >
              <p>2</p>
            </div>
            <p style={{ width: "300px", marginTop: "0.5rem" }}>
              <strong style={{ color: "white" }}>Skapande av Hemsida:</strong>
              När strategin är på plats, skapar vi en anpassad hemsida för ditt företag. Denna sida kommer att spegla din företagsidentitet och inkludera all nödvändig information om dina tjänster. Din hemsida kommer att finnas på alla våra domäner, exempelvis: 
              - www.goteborgcentrum.se/tjänst/ditt-företag
              - www.stockholmcentrum.se/tjänst/ditt-företag
              <a href="/skapande" style={{ color: "white" }} title="skapande av hemsida">Läs mer om vårt arbete</a>.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="Webbdesigner vid en dator"
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <div
              className={classes.rund}
              style={{ marginTop: "0.5rem" }}
              id="stadning"
            >
              <p>3</p>
            </div>
            <p style={{ width: "300px", marginTop: "0.5rem" }}>
              <strong style={{ color: "white" }}>Implementering och Optimering:</strong>
              Vi publicerar din hemsida på över 200 centrumdomäner och säkerställer att den är optimerad för sökmotorer (SEO). Detta innebär att när någon söker efter dina tjänster i olika städer, kommer ditt företag att dyka upp bland de första resultaten. Vi ser även till att varje centrumdomän är anpassad med lokal information och logotyp.
              <a href="/implementering" style={{ color: "white" }} title="implementering och optimering">Läs mer om vår process</a>.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="Kodning på en datorskärm"
            />
          </div>
        </section>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div id="betalning">
            <div className={classes.rund}>
              <p>4</p>
            </div>
            <p style={{ width: "300px", marginTop: "0.5rem" }}>
              <strong style={{ color: "white" }}>Kontinuerlig Uppföljning och Support:</strong>
              Efter lansering följer vi upp och analyserar resultaten för att säkerställa att din hemsida presterar optimalt. Vi erbjuder kontinuerlig support och justerar vår strategi vid behov för att säkerställa att du alltid får bästa möjliga resultat.
              <a href="/support" style={{ color: "white" }} title="kontinuerlig uppföljning och support">Läs mer om vår support</a>.
            </p>
          </div>

          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="Supportteam som hjälper kunder"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
