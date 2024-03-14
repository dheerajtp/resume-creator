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
import StepFive from "../components/Steps/StepFive.js";
import StepSix from "../components/Steps/StepSix.js";

const Home = () => {
  const stepDetails = useSelector((state) => state.step);
  console.info(stepDetails, "stepDetails");
  return (
    <CustomKeyboardView>
      <SafeAreaView style={styles.homeContainer}>
        <Header />
        <View style={styles.formContainer}>
          {!stepDetails?.value.step_one ? (
            <StepOne />
          ) : !stepDetails?.value.step_two ? (
            <StepTwo />
          ) : !stepDetails?.value.step_three ? (
            <StepsThree />
          ) : !stepDetails?.value.step_four ? (
            <StepFour />
          ) : !stepDetails?.value.step_five ? (
            <StepFive />
          ) : !stepDetails?.value.step_six ? (
            <StepSix />
          ) : (
            <Redirect href="/preview" />
          )}
        </View>
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default Home;
