import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #000000;
  padding: 20px 20px 50px;
  &:first-child {
    margin-right: 96px;
  }
`;

export const FooterLogo = styled.a`
  position: relative;
  text-decoration: none;
  display: block;
  margin-bottom: 50px;
  font-family: "Inter800";
  text-align: center;
  font-size: 36px;
  line-height: 1.22;
  color: #ffffff;

  &::before {
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    background: white;
    transform: translateY(28px);
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const LinksContainer = styled.div`
  margin-bottom: 40px;
`;
