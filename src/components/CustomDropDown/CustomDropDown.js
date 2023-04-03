import { nanoid } from "nanoid";
import {
  NavWraper,
  NavItem,
  MenuItem,
  DropdownTitle,
  MenuList,
} from "./CustomDropDown.styled";
import { useState } from "react";

export const CustomDropDown = () => {
  const [open, setOpen] = useState(false);

  const menus = ["Feature1", "Feature2", "Feature3"];

  return (
    <>
      <DropdownTitle onClick={() => setOpen(!open)} open={open}>
        Features
      </DropdownTitle>
      {open && (
        <NavWraper open={open}>
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
