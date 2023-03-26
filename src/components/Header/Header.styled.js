import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderEl = styled.header`
  padding: 28px 20px 30px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background: ${(props) => (props.navbarOpen ? "#000000" : "#fbfbfb")};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Inter800";
  font-size: 18px;
  line-height: 1.2;
  color: ${(props) => (JSON.parse(props.toogle) ? "#FFFFFF" : "#000000")};
`;
