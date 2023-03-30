import styled from "styled-components";

export const Section = styled.section`
  padding: 14px 20px 0;
  margin-bottom: 50px;
  @media screen and (min-width: 1440px) {
    padding-left: 122px;
    padding-right: 122px;
    padding-top: 0;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  font-family: "Poppins700";
  font-size: 24px;
  line-height: 1.5;
  color: #000000;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const MainTitleDescr = styled.p`
  margin-left: 68px;
  margin-right: 68px;
  margin-bottom: 20px;
  font-family: "Poppins500";
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: #717171;

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    font-size: 18px;
  }
`;
