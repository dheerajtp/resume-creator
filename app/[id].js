import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import styles from "../assets/styles/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormField from "../components/common/FormField";
import Button from "../components/common/Button";
import React from "react";
import * as Crypto from "expo-crypto";
import descriptionValidation from "../utils/validators/description";
import { AntDesign } from "@expo/vector-icons";
import CustomKeyboardView from "../components/common/CustomKeyboardView";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../store/slices/experience";

const ResponsibilitiesPage = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.experience);
  const params = useLocalSearchParams();
  const responsibility = value?.filter((item) => item.id === params.id);
  console.info("company experience details", responsibility);
  const [descriptionDetails, setDescriptionDetails] = React.useState(
    responsibility
      ? responsibility[0]?.data
        ? responsibility[0]?.data
        : []
      : []
  );
  console.log(descriptionDetails, "descriptionDetails");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(descriptionValidation),
  });

  const onSubmit = async (data) => {
    const { description } = data;
    reset();
    let currentDetails = descriptionDetails;
    let newDescription = {
      id: Crypto.randomUUID(),
      description,
    };
    setDescriptionDetails((prev) => [...prev, newDescription]);
    currentDetails = [...currentDetails, newDescription];
    dispatch(updateDetails({ id: params.id, newData: currentDetails }));
  };

  const deleteDescription = (id) => {
    let newDescription = descriptionDetails.filter((item) => item.id != id);
    dispatch(updateDetails({ id: params.id, newData: newDescription }));
    setDescriptionDetails(newDescription);
  };

  return (
    <CustomKeyboardView>
      <StatusBar />
      <SafeAreaView style={[styles.homeContainer, styles.mtop]}>
        <View style={styles.formContainer}>
          <View style={styles.marginVertical}>
            <Text style={styles.textAlign}>
              Add Work Experience For {params.company}
            </Text>
          </View>
          <FormField
            name="description"
            control={control}
            errors={errors}
            placeholder="Improved API efficiency by 30%"
          />
        </View>
        <Button
          title="Next"
          // type="submit"
          onPress={handleSubmit(onSubmit)}
        />

        <View style={[styles.container, styles.mtop, styles.mHorizontal]}>
          {descriptionDetails.map((item) => {
            return (
              <View key={item.id}>
                <View style={styles.descriptionSingleItem}>
                  <Text style={{ padding: 20 }}>{item?.description}</Text>
                  <TouchableHighlight
                    onPress={() => deleteDescription(item.id)}
                  >
                    <View>
                      <AntDesign name="delete" size={16} color="black" />
                    </View>
                  </TouchableHighlight>
                </View>

                <Text>{"\n"}</Text>
              </View>
            );
          })}
        </View>

        <Button title="Close" onPress={() => router.back()} />
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default ResponsibilitiesPage;
