import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Span,
} from "./styles";

const RightBlock = ({
  title,
  content,
  vender,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => {id===0 ? scrollTo("about"): scrollTo("mission")}}
                      >
                        {t(item.title)}
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
  );
};

export default withTranslation()(RightBlock);
