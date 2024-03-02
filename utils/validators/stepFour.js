import * as yup from "yup";

const stepFourSchema = yup.object().shape({
  projectName: yup.string().required("Project Name Is Required"),
  projectDescription: yup.string().required("Project Description Is Required"),
});

export default stepFourSchema;
