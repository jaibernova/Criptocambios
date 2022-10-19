import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import emailjs from 'emailjs-com';
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;


  const sendEmail = (e: { preventDefault: () => any; target: any | HTMLFormElement; }) => {
    e.preventDefault();


    emailjs.sendForm('service_r8xou5n', 'template_7hkvsu5', e.target, 'user_MM5xdNpQ9Zz6f7oOqcHRb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  };




  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="left">
          <form autoComplete="on" onSubmit={sendEmail}>
              <Col span={24}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  // value={values.name || ""}
                  // onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <input
                  type="text"
                  name="correo"
                  placeholder="Tu correo"
                  // value={values.email || ""}
                  // onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <textarea
                  placeholder="Tu mensaje"
                  // value={values.message || ""}
                  name="mensaje"
                  // onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Enviar")}</Button>
              </ButtonContainer>
            </form>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
