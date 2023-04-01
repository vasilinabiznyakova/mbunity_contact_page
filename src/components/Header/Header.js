
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Navigation } from "../Navigation/Navigation";
import { HeaderBtn } from "../BurgerBtn/BurgerBtn";
import { HeaderEl, Wrapper, Logo } from "./Header.styled";

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen((prev) => !prev);
  };

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <HeaderEl navbarOpen={navbarOpen}>
      <Wrapper>
        <Logo to="/" toogle={navbarOpen.toString()}>
          Logo Here
        </Logo>
        <HeaderBtn navbarOpen={navbarOpen} handleClick={handleClick} />
      </Wrapper>
      {navbarOpen || isDesktop ? <Navigation isDesktop={isDesktop} /> : null}
    </HeaderEl>
  );
};
