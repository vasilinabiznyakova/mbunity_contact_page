import { nanoid } from "nanoid";

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
