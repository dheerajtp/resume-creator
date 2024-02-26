import * as yup from "yup";

const stepTwoSchema = yup.object().shape({
  collegeName: yup.string().required("College Name Is Required"),
  collegeCourse: yup.string().required("College Course Is Required"),
  location: yup.string().required("Location Is Required"),
  year: yup.string().required("Year Is Required"),
});

export default stepTwoSchema;
