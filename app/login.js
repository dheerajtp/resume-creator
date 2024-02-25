import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import styles from "../assets/styles/style";
import { StatusBar } from "expo-status-bar";
import images from "../assets/images";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
import React from "react";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        ToastAndroid.show("Login Failed..!", ToastAndroid.SHORT);
      }
    } catch (err) {
      console.log("OAuth error", err);
      ToastAndroid.show(
        "Some Error Occured. Please Try Again!",
        ToastAndroid.SHORT
      );
    }
  }, []);

  return (
    <View style={[styles.container, styles.mtop]}>
      <StatusBar style="auto" />
      <Image source={images.login} style={styles.loginLogo} />
      <View style={styles.pContainer}>
        <Text style={styles.heading}>
          Supercharge your career and save time with our resume builder
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonColor}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
