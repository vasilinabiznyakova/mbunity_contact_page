import { Formik } from "formik";
import { contactFormSchema } from "../../Validation/ContactFormValidation";
import { FormError } from "../FormError/FormError";

import { CustomRadio } from "../CustomRadio/CustomRadio";
import {
  Label,
  TextLabel,
  FormField,
  FormWrapper,
  RadioTitle,
  RadioWrapper,
  Button,
  InputWrapper,
  FormArticle,
} from "./ContactForm.styled";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  picked: "",
  message: "",
};
export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    resetForm();
  };

  return (
    <FormArticle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <InputWrapper>
              <Label>
                <TextLabel mark={touched.firstName ? true : false}>
                  First Name
                </TextLabel>

                <FormField name="firstName" />
                <FormError name="firstName" />
              </Label>

              <Label>
                <TextLabel mark={touched.lastName ? true : false}>
                  Last Name
                </TextLabel>
                <FormField name="lastName" />
                <FormError name="lastName" />
              </Label>

              <Label>
                <TextLabel mark={touched.email ? true : false}>Email</TextLabel>
                <FormField name="email" />
                <FormError name="email" />
              </Label>

              <Label>
                <TextLabel mark={touched.phone ? true : false}>
                  Phone Number
                </TextLabel>
                <FormField name="phone" />
                <FormError name="phone" />
              </Label>
            </InputWrapper>
            <RadioTitle>Select Subject?</RadioTitle>

            <RadioWrapper role="group" aria-labelledby="my-radio-group">
              <CustomRadio name="picked" value="option1" />
              <CustomRadio name="picked" value="option2" />
              <CustomRadio name="picked" value="option3" />
              <CustomRadio name="picked" value="option4" />
            </RadioWrapper>
            <FormError name="picked" />

            <Label>
              <TextLabel>Message</TextLabel>
              <FormField name="message" placeholder="Write your message.." />
              <FormError name="message" />
            </Label>

            <Button type="submit">Send Message</Button>
          </FormWrapper>
        )}
      </Formik>
    </FormArticle>
  );
};
