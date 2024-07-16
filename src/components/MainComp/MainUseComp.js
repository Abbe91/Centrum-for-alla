import React, { useState } from "react";
import TableOfConent from "../toc/TableOfConent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./MainUseComp.css";
export const items = [
  {
    title: "SEO",
    alt: "SEO",
    srcImg: "https://www.svgrepo.com/show/478722/seo-1.svg",
    srcPath: "https://sheglam.se/seo"
  },
  {
    title: "Marknadsföreing",
    alt: "Allt inom Digital marknadsföreing",
    srcImg: "https://www.svgrepo.com/show/500399/marketing.svg",
    srcPath: "https://sheglam.se/marknadsforeing"
  },
  {
    title: "PPC",
    alt: "PPC (Pay-Per-Click) Reklam",
    srcImg: "https://www.svgrepo.com/show/383712/pay-per-click-hand-link.svg",
    srcPath: "https://sheglam.se/ppc"
  },
  {
    title: "Sociala Medier",
    alt: "Sociala Medier",
    srcImg: "https://www.svgrepo.com/show/234827/social-media.svg",
    srcPath: "https://sheglam.se/social-media"
  },
  {
    title: "Innehålls marknadsföring",
    alt: "Innehållsmarknadsföring",
    srcImg: "https://www.svgrepo.com/show/430120/content-marketing-communication.svg",
    srcPath: "https://sheglam.se/Innehallsmarknadsforing"
  },
  {
    title: "Webbdesign och Utveckling",
    alt: "Webbdesign och Utveckling",
    srcImg: "https://www.svgrepo.com/show/202392/development.svg",
    srcPath: "https://sheglam.se/webbdesign-och-utveckling"
  },
  
];
const MainUseComp = ({ formTitle }) => {
  const [showInneHall, setshowInneHall] = useState(false);

  return (
    <>
      <div className="mainComp" style={{ height: showInneHall && "1500px" }}>
        <section className="mainComp-header">
          <h1 className="mainComp-title">{formTitle}</h1>
          <h2 className="mainComp-subtitle">Vad kan vi hjälpa dig med</h2>
          <p className="mainComp-description">
            <a href="/seo" title="SEO">SEO</a> och 
            <a href="/marknadsforeing" title="Allt inom Digital marknadsföreing"> Allt inom Digital marknadsföreing</a>.
            <a href="/PPC" title="PPC (Pay-Per-Click) Reklam"> PPC (Pay-Per-Click) Reklam</a>,
            <a href="/social-media" title="Sociala Medier"> Sociala Medier</a>,
            <a href="/Innehallsmarknadsforing" title="Innehållsmarknadsföring"> Innehållsmarknadsföring</a>,
            <a href="/webbdesign-och-utveckling" title="Webbdesign och Utveckling"> Webbdesign och Utveckling</a>.
          </p>
        </section>
        <section className="mainComp-content">
          {items?.map((el, i) => {
            return (
              <div key={i} className="mainComp-item">
                <LazyLoadImage
                  alt={el.alt}
                  height={"60px"}
                  src={el.srcImg}
                  width={"60px"}
                  className="mainComp-img"
                />
                <a href={el.srcPath} title={el.alt} className="mainComp-link">
                  {el.title}
                </a>
              </div>
            );
          })}
        </section>
          <TableOfConent margin-top={"60px"} showInneHall={showInneHall} setshowInneHall={setshowInneHall} />
      </div>

    </>
  );
};

export default MainUseComp;
