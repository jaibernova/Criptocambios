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

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const Contenido = styled("p")`
  
  margin: 0rem 0 0rem 0;
  font-weight: 600;
  
  color: rgb(155, 100, 92);
  font-size: 1em
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const StyledButton = styled("a")<any>`
  background: ${(p) => p.color || "#2e186a"};
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  
  border-radius: 4px;
  padding: 13px 10px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
   
    background-color: rgb(255, 130, 92);
  }
`;