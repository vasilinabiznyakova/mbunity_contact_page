import { Formik } from "formik";
import { SubscribtionFormSchema } from "../../Validation/SubscribtionFormSchema";
import { FormError } from "../FormError/FormError";
import {
  FormTitle,
  FormField,
  FormWrapper,
  SubscrBtn,
  SubsrInfo,
} from "./SubscriptionForm.styled";

export const SubscriptionForm = () => {
  const initialValues = {
    subscription: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SubscribtionFormSchema}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <label>
            <FormTitle>Join Our Newsletter</FormTitle>
            <FormField name="subscription" placeholder="Your email address" />
          </label>

          <SubscrBtn type="submit">Subscribe</SubscrBtn>
          <SubsrInfo>
            * Will send you weekly updates for your better tool management.
          </SubsrInfo>
          <FormError name="subscription" />
        </FormWrapper>
      )}
    </Formik>
  );
};
