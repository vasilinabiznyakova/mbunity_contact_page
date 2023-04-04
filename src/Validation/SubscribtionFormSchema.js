import * as yup from "yup";

const emailRules = /^(?!-)(?!.*@[^,]*,)/;
const emailRules2 = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const SubscribtionFormSchema = yup.object().shape({
  subscription: yup
    .string()
    .min(6, "Your email can not be less than 6 characters")
    .max(63, "Your email should be less than 63 digits")
    .email("Please enter a valid email")
    .matches(emailRules, "Please enter a valid email")
    .matches(emailRules2, "Please enter a valid email"),
});
