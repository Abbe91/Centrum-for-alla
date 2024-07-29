import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import {ColorRing} from "react-loader-spinner";
import "./App.css"; // Make sure this import is present

import Partners from "./components/Partners";
import Links from "./internalLinks/Links";
import SeoServiceComponent from "./components/SeoServiceComponent";

const MarketingPage = lazy(() => import("./pages/InfoPages/MarketingPage"));
const Uppkopdodsbogoteborg = lazy(() =>
  import("./components/uppkopdodsbogoteborg/Uppkopdodsbogoteborg")
);
const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Tommadodsbogoteborg = lazy(() =>
  import("./components/tommadodsbogoteborg/Tommadodsbogoteborg")
);
const Bortforslingdodsboulricehamn = lazy(() =>
  import("./blocks/Bortforslingdodsboulricehamn")
);
const Bortforsling = lazy(() => import("./blocks/Goteborg/Bortforsling"));
const Dodsbofirma = lazy(() => import("./blocks/Goteborg/Dodsbofirma"));
const FreeConsultation = lazy(() => import("./components/FreeConsultation"));
const ExternaLankar = lazy(() =>
  import("./components/externalLinks/ExternaLankar")
);
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Seo = lazy(() => import("./components/Seo"));
const Arbetsprocessen = lazy(() => import("./components/Arbetsprocessen"));
const ImagesServicesComponent = lazy(() =>
  import("./components/ImagesServicesComponent")
);
const Helhetslosning = lazy(() =>
  import("./components/HelhetslosningMarketing")
);
const Bortforslingdodsbo = lazy(() =>
  import("./components/Bortforslingdodsbo")
);
const BookingModal = lazy(() => import("./components/BookingModal"));
const Adspages = lazy(() => import("./components/AdsPages"));
const Koperdodsbouddevalla = lazy(() =>
  import("./blocks/uddevalla/Koperdodsbouddevalla")
);
const Bortforslingdodsbogoteborg = lazy(() =>
  import("./blocks/Bortforslingdodsbogoteborg")
);
const Tommerdodsbouddevalla = lazy(() =>
  import("./blocks/uddevalla/Tommerdodsbouddevalla")
);

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
            <Route path="/bortforsling" element={<Bortforsling videoText={contentData?.videoText} />} />
            <Route path="/bortforsling-dodsbo-goteborg" element={<Bortforslingdodsbogoteborg videoText={contentData?.videoText} />} />
            <Route path="/bortforsling-dodsbo-ulricehamn" element={<Bortforslingdodsboulricehamn videoText={contentData?.videoText} />} />
            <Route path="/koper-dodsbo-uddevalla" element={<Koperdodsbouddevalla videoText={contentData?.videoText} />} />
            <Route path="/tommer-dodsbo-uddevalla" element={<Tommerdodsbouddevalla videoText={contentData?.videoText} />} />
            <Route path="/tomma-dodsbo-goteborg" element={<Tommadodsbogoteborg videoText={contentData?.videoText} />} />
            <Route path="/uppkop-dodsbo-goteborg" element={<Uppkopdodsbogoteborg videoText={contentData?.videoText} />} />
            <Route path="/dodsbofirma" element={<Dodsbofirma videoText={contentData?.videoText} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <ImagesServicesComponent />
          <FreeConsultation />
          <SeoServiceComponent />
          <Oppetider />
          <ServicesIconsComp />
          <Recensioner />
          <Footer />
          <Links />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
