import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: ${(props) => (props.location === "footer" ? 0 : "58px")};
  @media screen and (min-width: 1440px) {
    margin-bottom: ${(props) => props.location !== "footer" && "159px"};
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;

    @media screen and (min-width: 1440px) {
      margin-bottom: ${(props) =>
        props.location === "footer" ? "24px" : "50px"};
    }
  }
`;

export const Info = styled.p`
  text-align: ${(props) => (props.location === "footer" ? "left" : "center")};
  text-decoration: none;
  font-family: "Poppins400";
  font-size: 12px;
  line-height: 1.5;
  color: #ffffff;
  margin: ${(props) => (props.location === "footer" ? "0" : "0 44px")};

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.span`
  display: block;
  text-align: ${(props) => (props.location === "footer" ? "left" : "center")};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => (props.location === "footer" ? "14px" : "10px")};

  @media screen and (min-width: 1440px) {
    margin-right: 26px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;
