import { Button, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useSelector } from "react-redux";
import styles from "../assets/styles/style";
import Header from "../components/common/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import StepOne from "../components/Steps/StepOne";

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);
  const { value } = useSelector((state) => state.user);
  console.log(value);
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header />
      <View style={styles.formContainer}>
        <StepOne />
      </View>
    </SafeAreaView>
  );
};

export default Home;
