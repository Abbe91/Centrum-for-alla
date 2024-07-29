import React, { useState } from "react";
import MainComp from "../../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs/AboutUs";
import Nav from "../../components/Nav/Nav";
import Erbjuder from "../../components/Erbjuder/Erbjuder";
import Kostnadsfri from "../../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
import BookingModal from "../../components/BookingModal";

const Uddevalla = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "Marknadsföreing";
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle:
      "Effektiv SEO konsultation för Alla Centrum i Sverige | Centrum för Alla",
    metaContent:
      "Centrum för Alla erbjuder professionella SEO konsultation för företag i hela Sverige. Öka din synlighet och nå dina kunder snabbt med våra skräddarsydda strategier.",
    query: "Effektiv Marknadsföreing",
    formTitle: "Boka en kostnadsfri Marknadsföreing",
    subTitle2:
      "Öka Din Digitala Närvaro med Centrum för Alla",
    subTitle3: `Behöver du hjälp med ditt ${mainquery}?`
  });
  const customerData = useSelector(getCustomerData);
  const services =
    "Webbdesign, Sökmotoroptimering , Digital marknadsföring, Sociala medier hantering, E-postmarknadsföring, PPC-annonsering (Pay-per-click), Innehållsstrategi, Webbanalys";

  const articleStructuredData = {
    "@context": "https://schema.org/goteborg/seo-konsultation",
    "@type": "Centrum för alla",
    name: "Centrum för alla",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alla i Sverige",
      addressLocality: "Stockhgolm",
      addressRegion: "Sweden",
      postalCode: "41702",
      addressCountry: "SE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "57.71659765082482",
      longitude: "11.94740491088092"
    },
    url: "www.sheglam.se",
    telephone: "+467200000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    priceRange: "1000kr-20000kr",
    image: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  };
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <meta property="og:url" content="https://sheglam.se/goteborg/seo-konsultation" />
        <meta property="og:description" content={content.metaContent} />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3651376/pexels-photo-3651376.jpeg?auto=compress&cs=tinysrgb&w=1300"
        />
        <link hrefLang="sv" rel="canonical" href="https://sheglam.se" />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services}. Vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
          subTitle4={`Helhetslösning för ${mainquery}`}
          text1={`Centrum för Alla hjälper ditt företag att öka sin digitala närvaro med över 20 års erfarenhet. Vi erbjuder strategi, hemsideskapande, SEO-optimering och kontinuerlig support.`}
          subTitle5={"Våra tjänster"}
          text2={`Vi kan hjälpa dig med ${services}`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig att optimera din digitala närvaro med ${mainquery}?`}
          om={`är det självklara valet för att maximera synligheten på våra centrumdomäner.`}
        />

      </div>
      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Hjälp med {mainquery}?</h2>
          <h4>
            Vi erbjuder helt kostnadfritt besök/genomgång för att kunna hjälpa
            dig som kund med {mainquery}. 
            <strong style={{ fontWeight: "700" }}> {mainquery}.</strong>
          </h4>
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{ display: modalOpen ? "none" : "block" }}
          >
            BOKA
          </button>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
        {modalOpen && (
          <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>
      
      <div className="Tjänster">
        <Erbjuder
        city={"Uddevalla"} />
      </div>
      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={`${mainquery}.`}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default Uddevalla;
