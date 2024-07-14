import React from "react";
import Marketing from "../../utils/images/seoimages/marketing.png"
import "./Divider.css"; // Make sure to create this CSS file and import it

const Divider = () => {
  return (
    <div className="divider-container">
      <img
        className="divider-image"
        src={Marketing}
        alt="tömma lägenheter"
        title="tömma lägenheter"
      />
      <section>
        <h2 className="divider-heading">Få hjälp av proffsen!</h2>
        <p className="divider-paragraph">
          Vårt team är välutbildat och erfaret, och vi arbetar snabbt och
          effektivt för att underlätta för våra kunder under en tuff tid.
        </p>
      </section>
    </div>
  );
};

export default Divider;
