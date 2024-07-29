import React from "react";
import PropTypes from "prop-types";
import "./Erbjuder.css";

const Erbjuder = ({ city }) => {
  return (
    <div className="erbjuder" id="erbjuder-cont">
      <h2 className="erbjuder-header">Våra Tjänster i {city}</h2>
      <div className="service-box white-bg" id="service1">
        <h4>Eventlokaler i {city}</h4>
        <p>
          Hyr en av våra moderna och flexibla eventlokaler för ditt nästa möte,
          seminarium eller fest. Vi erbjuder allt från små, intimare rum till
          stora lokaler med plats för hundratals personer. Kontakta oss för att
          boka eller få mer information.
        </p>
      </div>
      <div className="service-box colored-bg" id="service2">
        <h4>Handel i {city}</h4>
        <p>
          Vår handelstjänst erbjuder dig möjligheten att marknadsföra och sälja
          dina produkter eller tjänster på ett effektivt sätt. Vi skapar en
          skräddarsydd strategi för att maximera din synlighet och öka din
          försäljning. Läs mer om hur vi kan hjälpa dig att växa online.
        </p>
      </div>
      <div className="service-box white-bg" id="service3">
        <h4>Restauranger i {city}</h4>
        <p>
          Upptäck vårt urval av restauranger och matställen i {city}.
          Vi erbjuder allt från eleganta middagar till snabbmat, med fokus på
          hög kvalitet och god service. Se våra erbjudanden och boka bord idag!
        </p>
      </div>
      <div className="service-box colored-bg" id="service4">
        <h4>Kultur och nöje i {city}</h4>
        <p>
          Utforska det lokala kulturutbudet och nöjesaktiviteter i {city}.
          Vi presenterar konserter, teaterföreställningar, konstutställningar
          och mycket mer. Ta del av det spännande utbudet och njut av kulturen!
        </p>
      </div>
    </div>
  );
};


export default Erbjuder;
