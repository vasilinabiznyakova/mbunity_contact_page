import { nanoid } from "nanoid";
import { ReactComponent as Location } from "../img/contact_sect/location.svg";
import { ReactComponent as Email } from "../img/contact_sect/email_icon.svg";
import { ReactComponent as Phone } from "../img/contact_sect/phone_icon.svg";

export const company = [
  { id: nanoid(), description: "About", link: "/about" },
  { id: nanoid(), description: "Contact", link: "/contact" },
  { id: nanoid(), description: "Blogs", link: "/blog" },
];

export const legal = [
  { id: nanoid(), description: "Privacy Policy", link: "/" },
  { id: nanoid(), description: "Terms & Services", link: "/" },
  { id: nanoid(), description: "Terms of Use", link: "/" },
  { id: nanoid(), description: "Refund Policy", link: "/" },
];

export const quickLinks = [
  { id: nanoid(), description: "Techlabz Keybox", link: "/" },
  { id: nanoid(), description: "Downloads", link: "/" },
  { id: nanoid(), description: "Forum", link: "/" },
];

export const reachUs = [
  {
    id: nanoid(),
    description: "+1012 3456 789",
    link: "tel:+1012 3456 789",
    icon: [<Phone key={nanoid()} />],
  },
  {
    id: nanoid(),
    description: "demo@gmail.com",
    link: "mailto:demo@gmail.com",
    icon: [<Email key={nanoid()} />],
  },
  {
    id: nanoid(),
    description:
      "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    link: "https://goo.gl/maps/d11NtAn3ZEPw3yCM6",
    icon: [<Location key={nanoid()} />],
  },
];
