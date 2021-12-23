import styled from "styled-components";

export const ContactContainer = styled("div")`
position: relative;
padding: 7.5rem 0 3rem;
// text-align: center;
// display: flex;
// justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Contenido = styled("p")`
  
  margin: 0rem 0 0rem 0;
  font-weight: 600;
  
  color: rgb(155, 100, 92);
  font-size: 1em
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: center;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
