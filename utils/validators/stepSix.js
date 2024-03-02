import * as yup from "yup";

const stepSixSchema = yup.object().shape({
  skill: yup.string().required("Skills is Required"),
});

export default stepSixSchema;
