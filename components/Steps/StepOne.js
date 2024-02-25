import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepOneSchema from "../../utils/validators/stepOne";
import FormField from "../common/FormField";
import steps from "../../data/steps";
import { View } from "react-native";
import Button from "../common/Button";

const StepOne = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepOneSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default StepOne;
