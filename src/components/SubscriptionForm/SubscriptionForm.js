import { Field, Form, Formik } from "formik";
import { SubscribtionFormSchema } from "../../Validation/SubscribtionFormSchema";
import { FormError } from "../FormError/FormError";

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
        <Form>
          <label>
            <span>Join Our Newsletter</span>
            <Field name="subscription" />
            <FormError name="subscription" />
          </label>

          <button type="submit">Subscribe</button>
          <p>* Will send you weekly updates for your better tool management.</p>
        </Form>
      )}
    </Formik>
  );
};
