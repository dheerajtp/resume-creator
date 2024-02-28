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

const Home = () => {
  const { value } = useSelector((state) => state.step);
  return (
    <CustomKeyboardView>
      <SafeAreaView style={styles.homeContainer}>
        <Header />
        <View style={styles.formContainer}>
          {!value.step_one ? (
            <StepOne />
          ) : !value.step_two ? (
            <StepTwo />
          ) : (
            <StepsThree />
          )}
        </View>
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default Home;
