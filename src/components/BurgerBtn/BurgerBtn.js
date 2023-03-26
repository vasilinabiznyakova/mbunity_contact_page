import { ReactComponent as BurgerBtnIcon } from "../../img/header/burger_btn.svg";
import { ReactComponent as CloseBtnIcon } from "../../img/header/cross.svg";
import {BurgerBtn} from "./BurgerBtn.styled"

export const HeaderBtn = ({ navbarOpen, handleClick }) => {
  return (
    <BurgerBtn type="button" onClick={handleClick}>
      {!navbarOpen ? <BurgerBtnIcon /> : <CloseBtnIcon />}
    </BurgerBtn>
  );
};
