import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { faqcontent } from "../../utils/faq";
import "./Faq.css";

const Faq = ({ city }) => {
  return (
    <div className="faqRoot">
      <h2 className="title">Vanliga frågor</h2>
      <div className="root">
        {faqcontent?.map((el, i) => (
          <Accordion key={i} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionSummary"
            >
              <Typography className="heading" variant="h6">
                {el.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordionDetails">
              <Typography
                variant="subtitle1"
                className="contentText"
              >
                {!city
                  ? el.text.replaceAll("i City", "")
                  : el.text.replaceAll("City", city)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
