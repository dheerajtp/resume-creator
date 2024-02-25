import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepOneSchema from "../../utils/validators/stepOne";
import FormField from "../common/FormField";
import steps from "../../data/steps";
import { View } from "react-native";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import SignOut from "../common/SignOut";
import resumeServices from "../../services/resume";
import { addStep } from "../../store/slices/steps";

const StepOne = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepOneSchema),
  });

  const { value } = useSelector((state) => state.user);
  
  const onSubmit = async (data) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      githubUrl = "",
      linkedInUrl = "",
    } = data;
    let valueTyped = {
      uuid: value?.user?.uuid,
      step_one: {
        firstName,
        lastName,
        email,
        phoneNumber,
        githubUrl,
        linkedInUrl,
      },
    };

    let response = await resumeServices.createStep({ ...valueTyped });
    if (response.status) {
      dispatch(addStep({ key: "step_one" }));
    }
  };

  return (
    <View>
      {steps.one.map((item, index) => {
        return (
          <FormField
            name={item.name}
            control={control}
            errors={errors}
            placeholder={item.placeholder}
            key={index}
          />
        );
      })}
      <Button title="Next" onPress={handleSubmit(onSubmit)} />
      <SignOut />
    </View>
  );
};

export default StepOne;
