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
import Input from "../components/common/Input";
import { AntDesign } from "@expo/vector-icons";
import CustomKeyboardView from "../components/common/CustomKeyboardView";
import { router } from "expo-router";

const ResponsibilitiesPage = ({ modalVisible, setModalVisible }) => {
  const [descriptionDetails, setDescriptionDetails] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(descriptionValidation),
  });

  const onSubmit = async (data) => {
    console.log("onSubmit called");
    console.log(data);
    const { description } = data;
    console.log(description);
    reset();
    setDescriptionDetails((prev) => [
      ...prev,
      {
        id: Crypto.randomUUID(),
        description,
      },
    ]);
  };

  const deleteDescription = (id) => {
    let newDescription = descriptionDetails.filter((item) => item.id != id);
    setDescriptionDetails(newDescription);
  };

  return (
    <CustomKeyboardView>
      <StatusBar />
      <SafeAreaView style={[styles.homeContainer, styles.mtop]}>
        <View style={styles.formContainer}>
          <View style={styles.marginVertical}>
            <Text>Add Work Experience</Text>
          </View>
          <FormField
            name="description"
            control={control}
            errors={errors}
            placeholder="Improved API efficiency by 30%"
          />
          {/* <View> */}
          {/* </View> */}
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
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Input value={item?.description} /> */}
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
