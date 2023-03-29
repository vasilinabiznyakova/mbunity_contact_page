import * as yup from "yup";

const nameRules = /^[aA-zZ\s]+$/;
const emailRules = /^(?!-)(?!.*@[^,]*,)/;
const emailRules2 = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRules =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const contactFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required!")
    .matches(nameRules, "Only latin characters are allowed!"),
  lastName: yup
    .string()
    .required("Last Name is required!")
    .matches(nameRules, "Only latin characters are allowed!"),
  email: yup
    .string()
    .min(6, "Your email can not be less than 6 characters")
    .max(63, "Your email should be less than 63 digits")
    .email("Please enter a valid email")
    .matches(emailRules, "Please enter a valid email")
    .matches(emailRules2, "Only latin characters are allowed!")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRules, "Correct format for phone# is +X XXX XXXX XXX")
    .required("Phone is a required field"),
  picked: yup.string().required("Please select the required option!"),
  message: yup
    .string()
    .min(6, "Your message can not be less than 6 characters")
    .max(1000, "Your message should be less than 1000 digits")
    .required("Please enter your message!"),
});
