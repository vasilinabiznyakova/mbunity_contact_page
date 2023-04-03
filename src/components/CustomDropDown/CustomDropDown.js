import { nanoid } from "nanoid";
import {
  NavWraper,
  NavItem,
  MenuItem,
  DropdownTitle,
  MenuList,
} from "./CustomDropDown.styled";
import { useState } from "react";
import { useRef } from "react";

export const CustomDropDown = () => {
  const [open, setOpen] = useState(false);

  const menus = ["Feature1", "Feature2", "Feature3"];

  const menuRef = useRef();
  const titleRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== titleRef.current) {
      setOpen(false);
    }
  });

  return (
    <>
      <DropdownTitle onClick={() => setOpen(!open)} open={open} ref={titleRef}>
        Features
      </DropdownTitle>
      {open && (
        <NavWraper open={open} ref={menuRef}>
          <MenuList>
            {menus.map((item) => (
              <MenuItem key={nanoid()}>
                <NavItem to="/features">{item}</NavItem>
              </MenuItem>
            ))}
          </MenuList>
        </NavWraper>
      )}
    </>
  );
};
