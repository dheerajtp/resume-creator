import { View } from "react-native";
import steps from "../../data/steps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import stepTwoSchema from "../../utils/validators/stepTwo";
import FormField from "../common/FormField";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import SignOut from "../common/SignOut";
import resumeServices from "../../services/resume";
import { addStep } from "../../store/slices/steps";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const StepTwo = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = React.useState([steps.two]); // Initialize with the first set of fields
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepTwoSchema),
  });

  const { value } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    const { collegeName, collegeCourse, location, year } = data;
    let valueTyped = {
      uuid: value?.user?.uuid,
      step_two: {
        collegeName,
        collegeCourse,
        location,
        year,
      },
    };

    let response = await resumeServices.createStep({ ...valueTyped });
    if (response.status) {
      dispatch(addStep({ key: "step_two" }));
    }
  };

  const addCourse = () => {
    setCourses((prevCourses) => [...prevCourses, steps.two]);
  };

  return (
    <View>
      {courses.map((course, courseIndex) => (
        <View key={courseIndex}>
          {course.map((item, index) => (
            <FormField
              name={item.name}
              control={control}
              errors={errors}
              placeholder={item.placeholder}
              key={index}
            />
          ))}
        </View>
      ))}
      <View style={{ padding: 5 }}>
        <FontAwesome6 name="add" size={24} color="black" onPress={addCourse} />
      </View>
      <Button title="Next" onPress={handleSubmit(onSubmit)} />
      <SignOut />
    </View>
  );
};

export default StepTwo;
