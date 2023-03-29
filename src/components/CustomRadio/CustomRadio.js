import { useField } from "formik";
import { RadioLabel, RadioFiled } from "./CustomRadio.styled";

export const CustomRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  const isSelected = field.value === props.value;
  return (
    <RadioLabel selection={isSelected ? true : false}>
      <RadioFiled type="radio" {...field} {...props} />
      General Inquiry
    </RadioLabel>
  );
};
