import React from "react";
import './Arbetsprocessen.css';

const Arbetsprocessen = () => {
  return (
    <div className="background">
      <h2 className="title">SÅ FUNGERAR DET</h2>
      <div className="flexContainer">
        <section className="section">
          <div id="analys">
            <div className="roundNumber">
              <p>1</p>
            </div>
            <p className="textContent">
              <strong>Analys och Strategi:</strong> Vi börjar med en kostnadsfri analys av ditt företag och dina marknadsföringsbehov. Detta inkluderar en genomgång av din nuvarande online-närvaro och en diskussion om dina mål. Syftet med denna analys är att förstå dina specifika behov och att skapa en skräddarsydd strategi som maximera din synlighet och SEO.{" "}
              <a href="/kontakt" className="linkText" title="kontakta oss">
                Kontakta oss
              </a>{" "}
              för att boka en analys.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imageContent"
              alt="Team som diskuterar vid ett konferensbord"
            />
          </div>
        </section>
        <section className="sectionReversed">
          <div>
            <div className="roundNumber" id="skapande">
              <p>2</p>
            </div>
            <p className="textContent">
              <strong>Skapande av Hemsida:</strong> När strategin är på plats, skapar vi en anpassad hemsida för ditt företag. Denna sida kommer att spegla din företagsidentitet och inkludera all nödvändig information om dina tjänster. Din hemsida kommer att finnas på alla våra domäner, exempelvis:
              - www.goteborgcentrum.se/tjänst/ditt-företag
              - www.stockholmcentrum.se/tjänst/ditt-företag
              <a href="/skapande" className="linkText" title="skapande av hemsida">
                Läs mer om vårt arbete
              </a>.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imageContent"
              alt="Webbdesigner vid en dator"
            />
          </div>
        </section>
        <section className="section">
          <div>
            <div className="roundNumber" id="stadning">
              <p>3</p>
            </div>
            <p className="textContent">
              <strong>Implementering och Optimering:</strong> Vi publicerar din hemsida på över 200 centrumdomäner och säkerställer att den är optimerad för sökmotorer (SEO). Detta innebär att när någon söker efter dina tjänster i olika städer, kommer ditt företag att dyka upp bland de första resultaten. Vi ser även till att varje centrumdomän är anpassad med lokal information och logotyp.
              <a href="/implementering" className="linkText" title="implementering och optimering">
                Läs mer om vår process
              </a>.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imageContent"
              alt="Kodning på en datorskärm"
            />
          </div>
        </section>
        <section className="sectionReversed">
          <div id="betalning">
            <div className="roundNumber">
              <p>4</p>
            </div>
            <p className="textContent">
              <strong>Kontinuerlig Uppföljning och Support:</strong> Efter lansering följer vi upp och analyserar resultaten för att säkerställa att din hemsida presterar optimalt. Vi erbjuder kontinuerlig support och justerar vår strategi vid behov för att säkerställa att du alltid får bästa möjliga resultat.
              <a href="/support" className="linkText" title="kontinuerlig uppföljning och support">
                Läs mer om vår support
              </a>.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imageContent"
              alt="Supportteam som hjälper kunder"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
