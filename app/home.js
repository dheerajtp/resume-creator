import { Button, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useSelector } from "react-redux";
import styles from "../assets/styles/style";
import Header from "../components/common/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import StepOne from "../components/Steps/StepOne";
import CustomKeyboardView from "../components/common/CustomKeyboardView";
import StepTwo from "../components/Steps/StepTwo.js";
import StepsThree from "../components/Steps/StepsThree.js";
import { Redirect } from "expo-router";
import StepFour from "../components/Steps/StepFour.js";

const Home = () => {
  const stepDetails = useSelector((state) => state.step);
  console.log(stepDetails, "stepDetails");
  return (
    <CustomKeyboardView>
      <SafeAreaView style={styles.homeContainer}>
        <Header />
        <View style={styles.formContainer}>
          {!stepDetails ? (
            <StepOne />
          ) : !stepDetails?.value.step_one ? (
            <StepOne />
          ) : !stepDetails?.value.step_two ? (
            <StepTwo />
          ) : !stepDetails?.value.step_three ? (
            <StepsThree />
          ) : (
            <StepFour />
          )}
        </View>
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default Home;
