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
import Responsibilities from "./Responsibilities";

const StepsThree = () => {
  const [experience, setExperience] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [id, setId] = React.useState("");
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
    console.log("onSubmit called");
    console.log(data);
    const { company, role, location, date } = data;
    setExperience((prev) => [
      ...prev,
      {
        id: Crypto.randomUUID(),
        company,
        role,
        location,
        date,
      },
    ]);
    reset();
  };

  const addExperience = async (id) => {
    setModalVisible(true);
    setId(id);
  };

  const deleteExperience = (id) => {
    let newCourses = experience.filter((item) => item.id != id);
    setExperience(newCourses);
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
        {experience.map((item) => {
          return (
            <View key={item.id}>
              <Input value={item?.company} />
              <Input value={item?.role} />
              <Input value={item?.location} />
              <Input value={item?.date} />
              <Button
                title="Add Responsibilities"
                onPress={() => addExperience(item.id)}
              />
              <Responsibilities
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                id={id}
                setId={setId}
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
