import React, { useEffect, useRef } from "react";
import "./LogoAnimation.css";

const LogoAnimation = () => {
  const scrollerRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!prefersReducedMotion.matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollerRefs.current.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="logoanimation">
      <h2 className="logo-title">Samarbetar med 3200+ internationellt kända företag.</h2>

      <div
        className="scroller"
        data-speed="fast"
        ref={(el) => (scrollerRefs.current[0] = el)}
      >
        <ul className="tag-list scroller__inner">
        <li>Mode och kläder</li>
        <li>Elektronik</li>
        <li>Livsmedel och dryck</li>
        <li>Skönhet och kosmetika</li>
        <li>Gym och fitnesscenter</li>
        <li>Spa och skönhetssalonger</li>
        <li>Apotek och hälsokostbutiker</li>
        <li>Medicinska kliniker och tandläkare</li>
        <li>Fastighetsmäklare</li>
        <li>Fastighetsutvecklare</li>
        <li>Fastighetsförvaltning</li>
        <li>Kommersiella fastigheter</li>
        <li>Skolor och universitet</li>
        <li>Onlinekurser och utbildningsplattformar</li>
        <li>Yrkesutbildningar</li>
        <li>Språkskolor</li>
        <li>Hotell och resorts</li>
        <li>Resebyråer</li>
        <li>Turistattraktioner</li>
        <li>Flygbolag</li>
        <li>Film- och tv-produktion</li>
        <li>Musikevenemang och konserter</li>
        <li>Teater och liveuppträdanden</li>
        <li>Spel och e-sport</li>
        <li>Restauranger och caféer</li>
        <li>Cateringföretag</li>
        <li>Matleveransservice</li>
        <li>Barer och nattklubbar</li>
        <li>Programvaruföretag</li>
        <li>IT-tjänster och support</li>
        <li>Startups inom tech</li>
        <li>Webb- och apputveckling</li>
        <li>Banker och kreditinstitut</li>
        <li>Försäkringsbolag</li>
        <li>Investeringsrådgivning</li>
        <li>Bokförings- och revisionsföretag</li>
        <li>Bilförsäljning och leasing</li>
        <li>Bilverkstäder och servicecenter</li>
        <li>Tillbehör och reservdelar</li>
        <li>Biltvätt och detailing</li>
        <li>Konsultföretag</li>
        <li>HR-tjänster</li>
        <li>Juridiska tjänster</li>
        <li>Logistik och transport</li>
        <li>Möbelbutiker</li>
        <li>Inredningsdesign</li>
        <li>Bygg- och renoveringsföretag</li>
        <li>Trädgårdsarbete och landskapsarkitektur</li>
        </ul>
      </div>

      <div
        className="scroller"
        data-direction="right"
        data-speed="slow"
        ref={(el) => (scrollerRefs.current[1] = el)}
      >
        <div className="scroller__inner">
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/01/28/16/17/ai-generated-8537858_1280.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/01/28/16/18/ai-generated-8537859_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/02/15/20/08/dog-8576035_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_640.png"
            alt=""
          />
           <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/01/28/16/17/ai-generated-8537858_1280.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/01/28/16/18/ai-generated-8537859_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2024/02/15/20/08/dog-8576035_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_640.png"
            alt=""
          />
          <img
            className="logo-carousol"
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_640.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
