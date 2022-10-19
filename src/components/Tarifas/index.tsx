import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import Form from "../../content/Form.json";
import TrmApi from "trm-api";
import axios from 'axios';
import { lazy } from "react";
import { ContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {
  RightBlockContainer,
  CenterVH,
  ButtonContainer
} from "./styles";

const Formulario = lazy(() => import("../../components/Formulario"));

const StyledTable = styled.table`
  display: block;
  overflow-x:auto;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 20px 30px;
  }

  tbody tr {
    font-size: 1.2em;
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightblue;
    }
  }
  thead > tr {
    font-size: 1.2em;
    padding: 0px 0px;
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 0px;
    font-weight: bold;
  }
`;
const Tarifas = ({
  title,
  content,
  vender,
  texto,
  V,
  H,
  button,
  titulo,
  icono,
  monedas,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const [bitcoin, setBitcoin] = useState(0);
  const [ethereum, setEthereum] = useState(0);
  const [tether, setTether] = useState(0);
  const [trm, setTrm] = useState(0)

  useEffect(() => {
    var tipo = "bitcoin%2Cethereum%2Ctether"

    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price/?ids=" +
        tipo +
        "&vs_currencies=usd"
      )
      .then((respuesta) => {
        // console.log(respuesta.data["cardano"].usd);
        // console.log(respuesta.data["bitcoin"].usd)       
        var valorBitcoin = respuesta.data['bitcoin'].usd;
        var valorEthereum = respuesta.data['ethereum'].usd;
        var valorTether = respuesta.data['tether'].usd;
        setBitcoin((valorBitcoin));
        setEthereum((valorEthereum));
        setTether((valorTether));
        console.log(bitcoin)
      });

    const trmApi = new TrmApi("86ntw691tjbccDPP9BypbFDIQ");
    const trm = trmApi.latest()
      .then((data) => {
        var trmCoin = data.valor
        var trmInt = parseInt(trmCoin)
        setTrm(trmInt)
      })
      .catch((error) => console.log(error));




  }, []);

  // const handleClick = (e: string) => {

  //     setState(e)
  // };
  // const scrollTo = (id: string) => {
  //     const element = document.getElementById(id) as HTMLDivElement;
  //     element.scrollIntoView({
  //         behavior: "smooth",
  //     });
  // };
  return (
    <div>

      <RightBlockContainer>
        <Fade direction="left">
          <ButtonContainer>
            <h6>Tarifas de venta</h6>

          </ButtonContainer>
          <CenterVH>

            <StyledTable>
              <thead>
                <tr>

                  <th>Criptomoneda</th>
                  <th>En dolares</th>
                  <th>En pesos</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Bitcoin</td>
                  <td>${(Math.round(bitcoin + (bitcoin * 0.05))).toLocaleString("de-DE")}</td>
                  <td>${(Math.round((bitcoin * trm) + ((bitcoin * trm) * 0.05)).toLocaleString("de-DE"))}</td>
                </tr>
                <tr>

                  <td>Ethereum</td>
                  <td>${Math.round((ethereum + (ethereum * 0.05))).toLocaleString("de-DE")}</td>
                  <td>${Math.round((ethereum * trm) + ((ethereum * trm) * 0.05)).toLocaleString("de-DE")}</td>
                </tr>
                <tr>

                  <td>Usd</td>
                  <td>${Math.round(tether + (tether * 0.05)).toLocaleString("de-DE")}</td>
                  <td>${Math.round((tether * trm) + ((tether * trm) * 0.05)).toLocaleString("de-DE")}</td>
                </tr>

              </tbody>
            </StyledTable>
          </CenterVH>

        </Fade>
      </RightBlockContainer>
      <hr />
      <RightBlockContainer>
        <Fade direction="left">
          <ButtonContainer>
            <h6>Tarifas de compra</h6>

          </ButtonContainer>
          <CenterVH>

            <StyledTable>
              <thead>
                <tr>

                  <th>Criptomoneda</th>
                  <th>En dolares</th>
                  <th>En pesos</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>Bitcoin</td>
                  <td>${(Math.round(bitcoin - (bitcoin * 0.05))).toLocaleString("de-DE")}</td>
                  <td>${(Math.round((bitcoin * trm) - ((bitcoin * trm) * 0.05)).toLocaleString("de-DE"))}</td>
                </tr>
                <tr>

                  <td>Ethereum</td>
                  <td>${Math.round((ethereum - (ethereum * 0.05))).toLocaleString("de-DE")}</td>
                  <td>${Math.round((ethereum * trm) - ((ethereum * trm) * 0.05)).toLocaleString("de-DE")}</td>
                </tr>
                <tr>

                  <td>Usd</td>
                  <td>${Math.round(tether - (tether * 0.05)).toLocaleString("de-DE")}</td>
                  <td>${Math.round((tether * trm) - ((tether * trm) * 0.05)).toLocaleString("de-DE")}</td>
                </tr>

              </tbody>
            </StyledTable>
          </CenterVH>

        </Fade>
      </RightBlockContainer>
    </div>
  );
};

export default withTranslation()(Tarifas);
