import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import {ColorRing} from "react-loader-spinner";
import "./App.css"; // Make sure this import is present

import Partners from "./components/Partners";
import Links from "./internalLinks/Links";
import SeoServiceComponent from "./components/SeoServiceComponent";
import SeoKonsultationUddevalla from "./blocks/Uddevalla/SeoKonsultationUddevalla";

const MarketingPage = lazy(() => import("./pages/InfoPages/MarketingPage"));

const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const SeoKonsultationGoteborg = lazy(() => import("./blocks/Goteborg/SeoKonsultationGoteborg"));
const FreeConsultation = lazy(() => import("./components/FreeConsultation"));
const ExternaLankar = lazy(() =>
  import("./components/externalLinks/ExternaLankar")
);
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Seo = lazy(() => import("./components/Seo"));
const Uddevalla = lazy(() =>
  import("./blocks/Uddevalla/Uddevalla")
);
const BookingModal = lazy(() => import("./components/BookingModal"));
const Adspages = lazy(() => import("./components/AdsPages"));

const App = () => {
  const contentData = useSelector(getContentData);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loader-wrapper">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#4fa94d', '#4fa94d', '#4fa94d', '#4fa94d', '#4fa94d']}
              />
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home videoText={contentData?.videoText} />} />
            <Route path="/marketingPage" element={<MarketingPage />} />
            <Route path="/forfragan" element={<ForFragan />} />
            <Route path="/boka" element={<BookingModal />} />
            <Route path="/seo" element={<Seo videoText={contentData?.videoText} />} />
            <Route path="/adspages" element={<Adspages videoText={contentData?.videoText} />} />
            <Route path="/uddevalla" element={<Uddevalla videoText={contentData?.videoText} />} />
            <Route path="/goteborg/seo-konsultation" element={<SeoKonsultationGoteborg videoText={contentData?.videoText} />} />
            <Route path="/uddevalla/seo-konsultation" element={<SeoKonsultationUddevalla videoText={contentData?.videoText} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <FreeConsultation />
          <SeoServiceComponent />
          <Oppetider />
          <ServicesIconsComp />
          <Recensioner />
          <Footer />
          <Links />
          <ExternaLankar />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
