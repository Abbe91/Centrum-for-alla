import React, { useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="aboutUs">
      <div
        className="aboutUs-info"
        style={{
          maxWidth: "90%",
          transition: "all 0.3s linear",
          width: "100%"
        }}
      >
        <h2 style={{ color: "white", marginTop: "1rem", fontSize: "1.4rem" }}>
          {query}
        </h2>
        <p
          style={{
            margin: "0.75rem auto",
            maxWidth: "800px",
            fontSize: "0.8rem"
          }}
        >
          Vi på <strong>{customerData.business}</strong> {om}
        </p>
        <h5>Vi erbjuder en omfattande digital marknadsföringslösning.</h5>
        <p
          style={{
            maxWidth: "800px",
            fontSize: "0.8rem",
            lineHeight: "27px",
            margin: "0 auto",
            height: "100%",
            overflow: "hidden",
            transition: "all 0.3s linear"
          }}
        >
          När ditt företag behöver förbättra sin online-närvaro och synlighet, kan du lita på oss. Vi erbjuder skräddarsydda digitala marknadsföringstjänster som inkluderar strategiutveckling, webbdesign, SEO-optimering, och mycket mer. Kontakta oss för en kostnadsfri konsultation och låt oss hjälpa dig att nå nya höjder med din digitala marknadsföring. För mer information om våra tjänster, besök vår sida om{" "}
          <a href="/tjanster" style={{ color: "white" }} title="våra tjänster">
            våra tjänster
          </a>{" "}
          eller läs mer om{" "}
          <a
            href="/tjanst/digital-marknadsforing"
            style={{ color: "white" }}
            title="digital marknadsföring"
          >
            digital marknadsföring
          </a>.
        </p>

        <div className="aboutUs-contact">
          <div>
            <h4>Adress</h4>
            <div>
              <p>{customerData.adress}</p>
              <p>
                {customerData.zip} {customerData.city}
              </p>
            </div>
          </div>
          <div style={{ lineHeight: "20px" }}>
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "1px",
                margin: "0.2rem 0"
              }}
            >
              <strong>orgnummer</strong>
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "1px",
                margin: "0.2rem 0"
              }}
            >
              0000-000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
