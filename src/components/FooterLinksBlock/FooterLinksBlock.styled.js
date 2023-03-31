import styled from "styled-components";

export const FooterTitle = styled.h2`
  margin-bottom: ${(props) => props.mbtn}px;
  font-family: "Poppins600";
  font-size: 16px;
  line-height: 1.62;
  color: #ffffff;
`;

export const WrapperFooterLinkBlock = styled.div`
  &:first-child {
    width: 143px;

    @media screen and (min-width: 1440px) {
      width: ${(props) => (props.title === "Reach us" ? "331px" : null)};

      margin-right: ${(props) =>
        props.title === "Reach us" ? "48px" : "60px"};
    }
  }

  &:not(:first-child) {
    width: 143px;
    @media screen and (min-width: 1440px) {
      margin-right: ${(props) => (props.title === "Company" ? "60px" : null)};
    }
  }
`;
