import React from "react";
import "./Erbjuder.css";

const Erbjuder = ({ city }) => {
  return (
    <div className="erbjuder" id="erbjuder-cont">
      <div id="service1">
        <h4>Eventlokaler i {city ? city : "din stad"}</h4>
        <p>
          Hyr en av våra moderna och flexibla eventlokaler för ditt nästa möte,
          seminarium eller fest. Vi erbjuder allt från små, intimare rum till
          stora lokaler med plats för hundratals personer. Kontakta oss för att
          boka eller få mer information.
        </p>
      </div>
      <div id="service2">
        <h4>Handel i {city ? city : "din stad"}</h4>
        <p>
          Vår handelstjänst erbjuder dig möjligheten att marknadsföra och sälja
          dina produkter eller tjänster på ett effektivt sätt. Vi skapar en
          skräddarsydd strategi för att maximera din synlighet och öka din
          försäljning. Läs mer om hur vi kan hjälpa dig att växa online.
        </p>
      </div>
      <div id="service3">
        <h4>Restauranger i {city ? city : "din stad"}</h4>
        <p>
          Upptäck vårt urval av restauranger och matställen i {city ? city : "din stad"}.
          Vi erbjuder allt från eleganta middagar till snabbmat, med fokus på
          hög kvalitet och god service. Se våra erbjudanden och boka bord idag!
        </p>
      </div>
      <div id="service4">
        <h4>Kultur och nöje i {city ? city : "din stad"}</h4>
        <p>
          Utforska det lokala kulturutbudet och nöjesaktiviteter i {city ? city : "din stad"}.
          Vi presenterar konserter, teaterföreställningar, konstutställningar
          och mycket mer. Ta del av det spännande utbudet och njut av kulturen!
        </p>
      </div>
    </div>
  );
};

export default Erbjuder;
