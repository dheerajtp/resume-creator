import { Text, View, ToastAndroid } from "react-native";
import steps from "../../data/steps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepThreeSchema from "../../utils/validators/stepThree";
import FormField from "../common/FormField";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import SignOut from "../common/SignOut";
import resumeServices from "../../services/resume";
import { addStep } from "../../store/slices/steps";
import React from "react";
import { FontAwesome6, AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "../../assets/styles/style";
import Input from "../common/Input";
import * as Crypto from "expo-crypto";
import { router } from "expo-router";
import { addexperience } from "../../store/slices/experience";

const StepsThree = () => {
  const { value: experienceState } = useSelector((state) => state.experience);
  const [experience, setExperience] = React.useState(experienceState);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(stepThreeSchema),
  });

  const { value } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    const { company, role, location, date } = data;
    let experienceDetails = experience;
    const newExperience = {
      id: Crypto.randomUUID(),
      company,
      role,
      location,
      date,
    };
    setExperience((prev) => [...prev, newExperience]);
    experienceDetails = [...experienceDetails, newExperience];
    dispatch(addexperience(experienceDetails));
    reset();
  };

  const deleteExperience = (id) => {
    let newCourses = experience.filter((item) => item.id != id);
    setExperience(newCourses);
    dispatch(addexperience(newCourses));
  };

  const addExperience = async () => {
    let data = {
      uuid: value?.user?.uuid,
      step_three: experience,
    };
    // resumeServices.createStep
    let response = await resumeServices.createStep({ ...data });
    if (response.status) {
      dispatch(addStep({ key: "step_three" }));
    }
  };

  return (
    <View>
      {steps.three.map((item, index) => {
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
        {experience &&
          experience.map((item) => {
            return (
              <View key={item.id}>
                <Input value={item?.company} />
                <Input value={item?.role} />
                <Input value={item?.location} />
                <Input value={item?.date} />
                <Button
                  title="Add Responsibilities"
                  onPress={() =>
                    router.push({
                      pathname: item?.id,
                      params: {
                        company: item?.company,
                      },
                    })
                  }
                />
                <Button
                  title={
                    <AntDesign
                      name="delete"
                      size={24}
                      color="black"
                      //
                    />
                  }
                  onPress={() => deleteExperience(item.id)}
                />
                <Text>{"\n"}</Text>
              </View>
            );
          })}
      </View>
      <View>
        <Button title="Next" type="submit" onPress={addExperience} />
        <Button title="Previous" />
      </View>
      <SignOut />
    </View>
  );
};

export default StepsThree;
