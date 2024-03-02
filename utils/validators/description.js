import * as yup from "yup";

const descriptionValidation = yup.object().shape({
  description: yup.string().required("Description Is Required"),
});

export default descriptionValidation;
