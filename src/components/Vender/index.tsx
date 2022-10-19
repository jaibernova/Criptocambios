import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import Form from "../../content/Form.json";
import { lazy } from "react";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import React, {useEffect, useState} from 'react';
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Span,
} from "./styles";

const FormularioVender = lazy(() => import("../../components/FormularioVender"));
const Vender = ({
  title,
  content,
  vender,
  texto,
  button,
  titulo,
  tituloVenta,
  monedas,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const [actual, setState] = useState("");

  const handleClick = (e: string) => {
  
    setState(e)
  };
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <RightBlockContainer>
        <Fade direction="left">
          <Row justify="space-between" align="middle" id={id}>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t(tituloVenta)}</h6>
               
                <Content>{t(texto)}</Content>
                <ButtonWrapper>
                  {typeof monedas === "object" &&
                    monedas.map((item: any, id: number) => {
                      return (

                        <Button
                          key={id}

                          color={item.color}
                          fixedWidth={true}
                          onClick={() => { 
                            id === 0 ? scrollTo("form") : scrollTo("form");
                            handleClick(item.title);
                            }}
                        >
                          <img src={(item.imagen)} width="20%" height="90%" alt="" />  {t(item.title)}
                        </Button>
                      );
                    })}
                </ButtonWrapper>
              </ContentWrapper>
            </Col>
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row justify="center" align="middle">

            <Col lg={4} md={12} sm={12} xs={12}>
              {typeof vender === "object" &&
                vender.map((item: any, id: number) => {
                  return (
                    <Link to="/vender">
                      <Button
                        key={id}
                        fixedWidth={true}

                      >
                        <Span>{t("Cotizar")}</Span>


                      </Button>
                    </Link>
                  );
                })}
            </Col>

          </Row>
        </Fade>
      </RightBlockContainer>
      <FormularioVender
        tipo={actual}
        cambio="vender"
        title={Form.title}
        content={Form.text}
        id="form"
      />
    </div>
  );
};

export default withTranslation()(Vender);
