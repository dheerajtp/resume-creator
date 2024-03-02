import { Text, View, ToastAndroid } from "react-native";
import steps from "../../data/steps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepSixSchema from "../../utils/validators/stepSix";
import FormField from "../common/FormField";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import SignOut from "../common/SignOut";
import resumeServices from "../../services/resume";
import { addStep } from "../../store/slices/steps";
import React from "react";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import styles from "../../assets/styles/style";
import * as Crypto from "expo-crypto";
import { addskills } from "../../store/slices/skills";

const StepSix = () => {
  const { value: skillsDetails } = useSelector((state) => state.skills);
  const [skills, setSkills] = React.useState(skillsDetails);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(stepSixSchema),
  });

  const { value } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    const { skill } = data;
    reset();
    let currentSkills = skills;
    const newSkill = {
      id: Crypto.randomUUID(),
      skill,
    };
    setSkills((prev) => [...prev, newSkill]);
    currentSkills = [...currentSkills, newSkill];
    dispatch(addskills(currentSkills));
  };

  const addProject = async () => {
    let data = {
      uuid: value?.user?.uuid,
      step_six: skills,
    };
    let response = await resumeServices.createStep({ ...data });
    if (response.status) {
      dispatch(addStep({ key: "step_six" }));
    }
  };

  const deleteCourse = (id) => {
    let newskills = skills.filter((item) => item.id != id);
    setSkills(newskills);
    dispatch(addskills(newskills));
  };

  return (
    <View>
      {steps.six.map((item, index) => {
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
        {skills.map((item) => {
          return (
            <View key={item.id} style={{ padding: 10 }}>
              <Text style={styles.textContent}>{item?.skill}</Text>
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

export default StepSix;
