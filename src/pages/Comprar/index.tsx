import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Form from "../../content/Form.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Formulario = lazy(() => import("../../components/Formulario"));
const Comprar = lazy(() => import("../../components/Comprar"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));




const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Comprar
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        texto={IntroContent.texto}
        button={IntroContent.button}
        titulo={IntroContent.titulo}
        monedas={IntroContent.monedas}        
        icon="crypto.png"
        id="intro"
      />

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container> 
  );
};

export default Home;
