import { Text, View, ToastAndroid } from "react-native";
import steps from "../../data/steps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepFourSchema from "../../utils/validators/stepFour";
import FormField from "../common/FormField";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import SignOut from "../common/SignOut";
import resumeServices from "../../services/resume";
import { addStep } from "../../store/slices/steps";
import React from "react";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import styles from "../../assets/styles/style";
import Input from "../common/Input";
import * as Crypto from "expo-crypto";

const StepFour = () => {
  const [projects, setProjects] = React.useState([]);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(stepFourSchema),
  });

  const { value } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    const { projectName, projectDescription } = data;
    reset();
    setProjects((prev) => [
      ...prev,
      {
        id: Crypto.randomUUID(),
        projectName,
        projectDescription,
      },
    ]);
  };

  const addProject = async () => {
    if (courses.length <= 0) {
      ToastAndroid.show("Please Add Courses..!", ToastAndroid.SHORT);
      return;
    } else {
      let data = {
        uuid: value?.user?.uuid,
        step_four: projects,
      };
      // resumeServices.createStep
      let response = await resumeServices.createStep({ ...data });
      if (response.status) {
        dispatch(addStep({ key: "step_four" }));
      }
    }
  };

  const deleteCourse = (id) => {
    let newProject = projects.filter((item) => item.id != id);
    setCourses(newProject);
  };

  return (
    <View>
      {steps.four.map((item, index) => {
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
      <Button
        title={
          <FontAwesome6
            name="add"
            size={24}
            color="black"
            //
          />
        }
        onPress={() => handleSubmit(onSubmit)()}
      />
      <View style={{ marginVertical: 10 }}>
        {projects.map((item) => {
          return (
            <View key={item.id}>
              <Input value={item?.projectName} />
              <Input value={item?.projectDescription} />
              <Button
                title={
                  <AntDesign
                    name="delete"
                    size={24}
                    color="black"
                    //
                  />
                }
                onPress={() => deleteCourse(item.id)}
              />
              <Text>{"\n"}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Button title="Next" type="submit" onPress={addProject} />
        <Button title="Previous" />
      </View>
      <SignOut />
    </View>
  );
};

export default StepFour;
