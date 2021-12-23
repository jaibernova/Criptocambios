import { Row, Col, Empty } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { SvgIcon } from "../../common/SvgIcon";
import InputCrypto from "../../common/InputCrypto";
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import TextArea from "../../common/TextArea";
import TrmApi from "trm-api";
import { ContactContainer, Content, Contenido, ContentWrapper, FormGroup, Span, ButtonContainer } from "./styles";


const Formulario = ({ title, content, id, t, cambio, form, current, icono, tipo }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;
  const [valorcoin, setActual] = useState(0);
  const [valor, setValor] = useState(0)
  const [trm, setTrm] = useState(0)

 

  const sendEmail = (e: { preventDefault: () => any; target: any | HTMLFormElement; }) => {
    e.preventDefault();


    emailjs.sendForm('service_r8xou5n', 'template_d48tspo', e.target, 'user_MM5xdNpQ9Zz6f7oOqcHRb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  };



  // const ValidationType = ({ type }: ValidationTypeProps) => {
  //   const ErrorMessage = errors[type];
  //   return (
  //     <Zoom direction="left">
  //       <Span erros={errors[type]}>{ErrorMessage}</Span>
  //     </Zoom>
  //   );
  // };

  useEffect(() => {
    console.log(tipo);
    if (tipo === "") {

    } else {
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price/?ids=" +
          tipo +
          "&vs_currencies=usd"
        )
        .then((respuesta) => {
          // console.log(respuesta.data["cardano"].usd);
          // console.log(respuesta.data["bitcoin"].usd)       
          var valorUsd = respuesta.data[tipo].usd;
          setActual((valorUsd));
          console.log(valorcoin)
        });

    }

    const trmApi = new TrmApi("86ntw691tjbccDPP9BypbFDIQ");
    const trm = trmApi.latest()
      .then((data) => {
        var trmCoin = data.valor
        var trmInt = parseInt(trmCoin)
        setTrm(trmInt)
      })
      .catch((error) => console.log(error));




  }, [tipo]);

  const handleInputChange = (event: { target: any; }) => {
    // const { name, value } = event.target;
    // setValor({ ...valor, [name]: value });
    setValor(event.target.value);
    console.log(valor)
    // console.log(event.target.value)
  };


  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={24} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={""} />
          </Slide>
        </Col>
      </Row>


      <Row justify="space-between" align="middle">
        {/* <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col> */}
        <Col lg={24} md={24} sm={24} xs={24}>
          <Slide direction="left">
            <form autoComplete="on" onSubmit={sendEmail}>
              <Col span={24}>
                <p>¿Cuanto deseas comprar en pesos?</p>
                <input
                  type="any"
                  name="pesos"
                  placeholder="Ingresa el valor en pesos"
                  value={valor !== 0 ? valor : ""}
                  onChange={handleInputChange}
                />

                {/* <ValidationType type="name" /> */}
              </Col>
              <br />
              <Col span={24}>
                <p>Recibes en la criptomoneda seleccionada</p>
                <input
                  type="any"
                  name="cripto"
                  placeholder="Porfavor selecciona una criptomoneda en la parte superior"
                  value={(valor !== 0 && tipo !== "")  ? "Recibiras "+((valor / (valorcoin * trm)).toFixed(11))+" "+tipo : ""}

                />
                {/* <ValidationType type="name" /> */}
              </Col>
              <br />
    
              <Row justify="space-between" align="middle" id={id}>
                <Col lg={11} md={11} sm={11} xs={24}>
               
                    {/* <h6>{t(medios)}</h6> */}

                    <Contenido>Recuerda que los medios de pagos que manejamos son:</Contenido>
                    <Contenido>  • Nequi: 317 408 1631</Contenido>
                    <Contenido>  • Daviplata: 317 408 1631</Contenido>
                    <Contenido>  • Av villas: 317 408 1631</Contenido>
                    <br />
                    <Contenido>  Nota: Escribir en el mensaje o comprobante "NO reembolsable. Pago de Bitcoins a Jaiber Nova."</Contenido>
                </Col>
                <br />
                {/* <div style={{alignItems:'center'}}>
                <Col lg={11} md={11} sm={12} xs={24}>
                  <SvgIcon src={icono} width="60%" height="60%"  />
                </Col>
                </div> */}
              </Row>



              <br />
              {/* <h3>
                Pagos aceptados
              </h3>
              <h4>
                Nequi
              </h4> */}
              <Col span={24}>
                <p>Ingresa tu nombre</p>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                // value={values.name || ""}
                // onChange={handleInputChange}
                />
                {/* <ValidationType type="name" /> */}
              </Col>
              <br />
              <Col span={24}>
                <p>Ingresa tu correo</p>
                <input
                  type="email"
                  name="correo"
                  placeholder="Tu correo"
                // value={values.email || ""}
                // onChange={handleInputChange}
                />
                {/* <ValidationType type="email" /> */}
              </Col>
              <br />
              <Col span={24}>
                <p>Ingresa tu celular</p>
                <input
                  type="cellphone"
                  name="celular"
                  placeholder="Tu celular"
                // value={values.cellphone || ""}
                // onChange={handleInputChange}
                />
                {/* <ValidationType type="email" /> */}
              </Col>
              <br />
              <Col span={24}>
                <p>Comentarios adicionales</p>
                <textarea

                  placeholder="Comentarios"
                  // value={values.message || ""}
                  name="mensaje"
                // onChange={handleInputChange}
                />
                {/* <ValidationType type="message" /> */}
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

export default withTranslation()(Formulario);
