import React, { useRef, useState, useEffect } from "react";
import "./Kostnadsfri.css";
import emailjs from "@emailjs/browser";

const Kostnadsfri = ({ vad, mainquery, text }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qwj4wc3",
        "template_gudl7ri",
        form.current,
        process.env.REACT_APP_EMAILJS_2
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("email sent");
            setSending(false);
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="kostandri-cont">
      <div>
        <h2>Kostnadsfritt Enskilt Samtal {vad}</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: "22px" }}>
        Boka ett kostnadsfritt enskilt samtal med våra {mainquery} på Centrum för Alla. Få skräddarsydda råd och strategier för att öka din digitala närvaro
        </p>
      </div>
    </div>
  );
};

export default Kostnadsfri;
