import styled from "styled-components";

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Loader = styled.div`
  height: 524px;

  @media screen and (min-width: 1440px) {
    height: 394px;
  }
`;
