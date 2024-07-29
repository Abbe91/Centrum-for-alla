import React from "react";
import "./Footer.css";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import './Footer.css';

const Footer = () => {
  const customerData = useSelector(getCustomerData);
  return (
    <>
      <div className="footer" >
        <div>
          <h3 style={{ marginBottom: "0.7rem" }}>Centrum för alla</h3>
          <a href={`tel:${customerData.phone}`} style={{ color: "white" }}>
            <AiTwotonePhone style={{ marginBottom: "0.2rem",transform: "scaleX(-1)", paddingLeft: ".1rem"}} />
            <p>{customerData.phone}</p>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091387485178"
            title="Centrum för alla Facebook"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              fontSize: "1.4rem"
            }}
          >
            <FaFacebook />
          </a>
        </div>
        
        <div
        style={{
          background: "#00a7ac",
          color: "white",
          height: "300px",
          textAlign: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <p
          style={{
            maxWidth: "340px",
            lineHeight: "24px",
            margin: "0.5rem auto",
            fontSize: "0.8rem"
          }}
        >
          Är du redo att ta ditt företag till nästa nivå med hjälp av Centrum för Alla? Kontakta oss idag för att lära dig mer om hur vi kan hjälpa dig att nå ut till fler kunder och öka din digitala närvaro. Tillsammans kan vi skapa en stark och hållbar online-framgång för ditt företag.
        </p>
      </div>

        <section >
          <h4 style={{ marginBottom: "0.5rem" }}>Våra kontor/butiker</h4>
          <div className="office">
            <div>
              <h5>Centrum för alla</h5>
              <p>Sverige</p>
              <p>Stockholm</p>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Footer;
