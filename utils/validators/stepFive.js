import * as yup from "yup";

const stepFiveSchema = yup.object().shape({
  achievement: yup.string().optional(),
  achievementDescription: yup.string().optional(),
});

export default stepFiveSchema;
