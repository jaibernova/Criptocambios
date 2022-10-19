import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { useHistory } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    const closeButton = () => {
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall
          onClick={() => closeButton()}
        >
          {/* <a href="/comprar">Comprar</a> */}
          <Link to="/comprar">
            <Span>{t("Comprar")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => closeButton()}
        >
          {/* <a href="/vender">Vender</a>           */}
          <Link to="/vender">
            <Span>{t("Vender")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => closeButton()}
        >
          {/* <a href="/tarifas">Tarifas</a> */}
          <Link to="/tarifas">
            <Span>{t("Tarifas")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => closeButton()}
        >
          <a href="http://criptocambioslatam.com/">Blog</a>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contactar")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="criptocambios.png" width="130px" height="130px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem></MenuItem>
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
