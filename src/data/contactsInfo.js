import { nanoid } from "nanoid";

export const contactsInfo = [
  {
    id: nanoid(),
    description: "+1012 3456 789",
    link: "tel:+10123456789",
    icon: "phone",
  },
  {
    id: nanoid(),
    description: "demo@gmail.com",
    link: "mailto:demo@gmail.com",
    icon: "email",
  },
  {
    id: nanoid(),
    description:
      "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    link: "https://goo.gl/maps/d11NtAn3ZEPw3yCM6",
    icon: "location",
  },
];
