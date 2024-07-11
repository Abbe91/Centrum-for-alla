import React, { useState } from "react";
import TableOfConent from "../toc/TableOfConent";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <section style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          <h1
            style={{
              opacity: "0",
              borderBottom: "1px solid white"
            }}
          >
            {formTitle}
          </h1>
          <h2 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>
            Vad kan vi hjälpa dig med
          </h2>
          <p
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              fontSize: "1rem",
              letterSpacing: "1px"
            }}
          >
            <a
              href="/seo"
              title="SEO"
              style={{ color: "inherit" }}
            >
              SEO
            </a>{" "}
            och{" "}
            <a
              href="/marknadsforeing"
              title="Allt inom Digital marknadsföreing"
              style={{ color: "inherit" }}
            >
              Allt inom Digital marknadsföreing
            </a>
            .{" "}
            <a
              href="/PPC"
              title="PPC (Pay-Per-Click) Reklam"
              style={{ color: "inherit" }}
            >
              PPC (Pay-Per-Click) Reklam
            </a>
            ,{" "}
            <a
              href="/social-media"
              title="Sociala Medier"
              style={{ color: "inherit" }}
            >
              Sociala Medier
            </a>
            ,{" "}
            <a
              href="/Innehallsmarknadsforing"
              title="Innehållsmarknadsföring"
              style={{ color: "inherit" }}
            >
              Innehållsmarknadsföring
            </a>
            ,{" "}
            <a
              href="/webbdesign-och-utveckling"
              title="Webbdesign och Utveckling"
              style={{ color: "inherit" }}
            >
              Webbdesign och Utveckling
            </a>
            .
          </p>
        </section>
        <section
          style={{
            display: "flex",
            maxWidth: "700px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {items?.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1.5rem 1.5rem"
                }}
              >
                <LazyLoadImage
                  alt={el.alt}
                  height={"60px"}
                  src={el.srcImg}
                  width={"60px"}
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    padding: "0.8rem"
                  }}
                />
                <a
                  href={el.srcPath}
                  title={el.alt}
                  style={{
                    fontSize: "0.8rem",
                    color: "white",
                    maxWidth: "100px",
                    marginTop: "0.3rem",
                    fontWeight: "bold",
                    letterSpacing: "0.5px"
                  }}
                >
                  {el.title}
                </a>
              </div>
            );
          })}
        </section>
        <TableOfConent
          showInneHall={showInneHall}
          setshowInneHall={setshowInneHall}
        />
      </div>
    </>
  );
};

export default MainUseComp;
