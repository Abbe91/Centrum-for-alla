import React, { useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreToggle = () => setReadMore(!readMore);

  return (
    <section className="aboutUs">
      <div className="aboutUs-info">
        <h2>{query}</h2>
        <p>
          Vi på <strong>{customerData.business}</strong> {om}
        </p>
        <h5>Vi erbjuder en omfattande digital marknadsföringslösning.</h5>
        <p className={`aboutUs-description ${readMore ? "expanded" : ""}`}>
          När ditt företag behöver förbättra sin online-närvaro och synlighet, kan du lita på oss. Vi erbjuder skräddarsydda digitala marknadsföringstjänster som inkluderar strategiutveckling, webbdesign, SEO-optimering, och mycket mer. Kontakta oss för en kostnadsfri konsultation och låt oss hjälpa dig att nå nya höjder med din digitala marknadsföring. För mer information om våra tjänster, besök vår sida om{" "}
          <a href="/tjanster" title="våra tjänster">våra tjänster</a>{" "}
          eller läs mer om{" "}
          <a href="/tjanst/digital-marknadsforing" title="digital marknadsföring">digital marknadsföring</a>.
        </p>
        {readMore && (
          <div className="more-info">
            <p>
              Vi arbetar med ett brett spektrum av teknologier och plattformar för att säkerställa att dina digitala marknadsföringsbehov är täckta. Vårt team av experter är redo att anpassa strategier specifikt för ditt företag, vilket ger dig en konkurrensfördel.
            </p>
            <p>
              Utöver detta erbjuder vi utbildning och support för att säkerställa att du och ditt team har de kunskaper som krävs för att upprätthålla och optimera era digitala strategier framöver.
            </p>
          </div>
        )}
        <button onClick={handleReadMoreToggle}>
          {readMore ? "Read Less" : "Read More"}
        </button>

        <div className="aboutUs-contact">
          <div>
            <h4>Adress</h4>
            <address>
              <p>{customerData.adress}</p>
              <p>{customerData.zip} {customerData.city}</p>
            </address>
          </div>
          <div className="contact-info">
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
            <p className="orgnummer">
              <strong>orgnummer</strong>
            </p>
            <p className="orgnummer-value">0000-000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
