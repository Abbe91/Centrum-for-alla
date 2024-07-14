import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import "./MainComp.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import Faq from "../faq/Faq";
import { MdArrowForwardIos } from "react-icons/md";
import { setServices } from "../../redux-toolkit/snabbkollenSlice";
const MainComp = ({ subTitle5, text2, city, formTitle }) => {
  const Divider = lazy(() => import("./Divider"));
  const Arbetsprocessen = lazy(() => import("../Arbetsprocessen"));
  const MainUseComp = lazy(() => import("./MainUseComp"));
  const Helhetslosningdodsbo = lazy(() => import("../HelhetslosningMarketing"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="root">
      <div className="main-top-main-small">
        <h1 class="hero-title">Vi hjälper dig att nå dina mål</h1>
        <h4 class="hero-content">Centrum för alla tar din marknadsföring till nästa nivå</h4>
        <div
          style={{
            width: "330px",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}
        >
          <Autocomplete
            onChange={(e) => {
              e.preventDefault();
              dispatch(setServices(e.target.innerText));
              navigate("/forfragan");
            }}
            background="white"
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={servicesArray.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                style={{
                  backgroundColor: "white",
                  width: "330px",
                  height: "3rem",
                  borderRadius: "5px",
                  padding: "0.5rem"
                }}
                {...params}
                placeholder="Hur kan vi hjälpa dig"
                margin="normal"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  disableUnderline: true
                }}
              />
            )}
          />
          <button
            onClick={() => navigate("/forfragan")}
            style={{
              position: "absolute",
              right: "2%",
              background: "#4890e3",
              border: "none",
              color: "black",
              height: "2.2rem",
              borderRadius: "3px",
              top: "30%",
              width: "3rem"
            }}
          >
            <MdArrowForwardIos style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
      <MainUseComp formTitle={formTitle} />
      <Divider />
      <Arbetsprocessen />
      <Faq city={city} />
      <section className="content-new-container">
      <div>
        <h4>{subTitle5}</h4>
        <p>
          {text2} Behöver du hjälp med att{" "}
          <a href="/analys" title="analys" style={{ color: "inherit" }}>
            Analys och Strategi
          </a>{" "}
          och Kontinuerlig Uppföljning och Support{" "}
          <a
            href="/kontinuerlig"
            title="kontinuerlig"
            style={{ color: "inherit" }}
          >
            vi erbjuda våra kunder en oslagbar fördel när det gäller
            sökmotoroptimering (SEO) och online-marknadsföring.
          </a>{" "}
          (SEO) och online-marknadsföring.
        </p>
      </div>

      <div>
        <h4>Skapande av Hemsida</h4>
        <p>
          {/* {text1} */}
          Att ta hand om ett{" "}
          <a href="/hemsida" title="Hemsida" style={{ color: "inherit" }}>
            Hemsida
          </a>{" "}
          Vi skapar en anpassad hemsida för ditt företag som speglar din
          företagsidentitet och inkluderar all nödvändig information om dina
          tjänster.
        </p>
      </div>

      <div id="wecando">
        <h4>Varför Välja Oss?</h4>
        <p>
          {/* {text1} */}
          Unikt Nätverk av Domäner: Med vårt omfattande nätverk av över 200
          centrumdomäner får ditt företag en betydande SEO-fördel.{" "}
          <a
            href="/vardera-dodsbo"
            title="värdera dödsbo"
            style={{ color: "inherit" }}
          >
            Skräddarsydda Lösningar: Vi anpassar våra tjänster efter dina
            specifika behov och mål.
          </a>{" "}
          <a
            href="/bortforsling-dodsbo"
            title="bortforsling av dödsbo"
            style={{ color: "inherit" }}
          >
            Expertis och Erfarenhet: Vårt team har den erfarenhet och kunskap
            som krävs för att hjälpa ditt företag att lyckas online.
          </a>{" "}
          <a
            href="/tommer-hushall"
            title="tömmer hushåll, bohag och dödsbo"
            style={{ color: "inherit" }}
          >
            Kontinuerlig Support: Vi erbjuder långsiktig support och uppföljning
            för att säkerställa att din digitala närvaro fortsätter att växa
            och utvecklas.
          </a>
        </p>
      </div>

      <div>
        <h4>Vår Vision</h4>
        <p>
          {/* {text1} */}
          Vår vision är att stärka lokala företag genom att ge dem de verktyg
          och resurser de behöver för att nå sin fulla potential online. Vi
          tror att varje företag, oavsett storlek eller bransch, förtjänar att
          synas och höras i den digitala världen. Genom att skapa anpassade
          hemsidor och publicera dem på våra centrumdomäner, hjälper vi våra
          kunder att bli mer synliga för sina potentiella kunder och att växa
          sin verksamhet.
        </p>
      </div>
    </section>
      <Helhetslosningdodsbo />
    </section>
  );
};

export default MainComp;
const servicesArray = [
  {
    title: "Webbdesign"
  },
  {
    title: "Sökmotoroptimering (SEO)"
  },
  {
    title: "Digital marknadsföring"
  },
  {
    title: "Sociala medier hantering"
  },
  {
    title: "E-postmarknadsföring"
  },
  {
    title: "PPC-annonsering (Pay-per-click)"
  },
  {
    title: "Innehållsstrategi"
  },
  {
    title: "Webbanalys"
  }
];
