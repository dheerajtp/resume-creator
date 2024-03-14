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
import { addproject } from "../../store/slices/projects";

const StepFour = () => {
  const { value: projectDetails } = useSelector((state) => state.project);
  const [projects, setProjects] = React.useState(projectDetails);
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
    const { projectName, projectDescription, tech = null } = data;
    reset();
    let currentProjects = projects;
    const newProject = {
      id: Crypto.randomUUID(),
      projectName,
      projectDescription,
      tech,
    };
    setProjects((prev) => [...prev, newProject]);
    currentProjects = [...currentProjects, newProject];
    dispatch(addproject(currentProjects));
  };

  const addProject = async () => {
    let data = {
      uuid: value?.user?.uuid,
      step_four: projects,
    };
    console.info(data)
    let response = await resumeServices.createStep({ ...data });
    if (response.status) {
      dispatch(addStep({ key: "step_four" }));
    }
  };

  const deleteCourse = (id) => {
    let newProject = projects.filter((item) => item.id != id);
    setProjects(newProject);
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
            <View key={item.id} style={{ padding: 10 }}>
              <Input value={item?.projectName} />
              <Text style={styles.textContent}>{item?.projectDescription}</Text>
              {item.tech && (
                <Text style={styles.textContent}>Tech: {item?.tech}</Text>
              )}
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
