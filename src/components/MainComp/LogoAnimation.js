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
      <h1>Samarbetar med 3200+ internationellt kända företag.</h1>

      <div
        className="scroller"
        data-speed="fast"
        ref={(el) => (scrollerRefs.current[0] = el)}
      >
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
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
