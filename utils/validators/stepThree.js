import * as yup from "yup";

const stepThreeSchema = yup.object().shape({
  company: yup.string().required("Company Is Required"),
  role: yup.string().required("Role Is Required"),
  location: yup.string().required("Location Is Required"),
  date: yup.string().required("Date Is Required"),
  description: yup.string().optional(),
});

export default stepThreeSchema;
