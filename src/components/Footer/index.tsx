import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  AStyled,
  // FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

// interface SocialLinkProps {
//   href: string;
//   src: string;
// }

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  // const SocialLink = ({ href, src }: SocialLinkProps) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   );
  // };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contacto")}</Language>
              <Large to="/">{t("Escribenos")}</Large>
              {/* <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para> */}
              <a href="mailto:jdnp005@hotmail.com">
                <Chat>{t(`Enviar correo`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Politica")}</Title>
              <Large to="/" left="true">
                {t("Privacidad")}
              </Large>
              <Large left="true" to="/">
                {t("Terminos")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              {/* <Large left="true" to="/">
                {t("Support Center")}
              </Large> */}
              {/* <Large left="true" to="/">
                {t("Customer Support")}
              </Large> */}
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Direccion")}</Language>
              <Para>Carrera 114 # 140 - 54</Para>
              <Para>Bogota</Para>
              <Para>Suba</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Empty />
              <Title>{t("Entradas")}</Title>
              {/* <Large left="true" to="/">
                {t("About")}
              </Large> */}
              <AStyled  href="http://criptocambioslatam.com/" target="_blank"  >
                 {t("Blog")}
              </AStyled>
              {/* <Large left="true" to="/">
                {t("Press")}
              </Large> */}
              {/* <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large> */}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Lenguaje")}</Label>
              <LanguageSwitchContainer>
                {/* <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch> */}
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="criptocambios.png"
                  aria-label="homepage"
                  width="150px"
                  height="150px"
                />
              </LogoContainer>
            </NavLink>
            {/* <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />

            </FooterContainer> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
