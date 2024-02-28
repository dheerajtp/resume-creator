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
import loginServices from "../services/login";
import { addUser } from "../store/slices/user";
import { useDispatch } from "react-redux";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const dispatch = useDispatch();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const result = await startOAuthFlow();
      if (result.createdSessionId) {
        const {
          firstName = "",
          hasImage = false,
          imageUrl = "",
          lastName = "",
        } = result.signIn.userData;
        let insertIntoFirebase = await loginServices.createUser(
          firstName,
          hasImage,
          imageUrl,
          lastName
        );
        if (insertIntoFirebase.status == true) {
          result.setActive({ session: result.createdSessionId });
          dispatch(
            addUser({
              uuid: insertIntoFirebase.uuid,
              name: `${firstName} ${lastName}`,
              imageUrl,
            })
          );
        } else {
          ToastAndroid.show("Login Failed..!", ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show("Login Failed..!", ToastAndroid.SHORT);
      }
    } catch (err) {
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
