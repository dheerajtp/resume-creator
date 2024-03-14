import * as yup from "yup";

const stepOneSchema = yup.object().shape({
  firstName: yup.string().required("First Name Is Required"),
  lastName: yup.string().required("Last Name Is Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone Number Is Required"),
  githubUrl: yup
    .string()
    .nullable()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .optional(),
  linkedInUrl: yup
    .string()
    .nullable()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .optional(),
});

export default stepOneSchema;
