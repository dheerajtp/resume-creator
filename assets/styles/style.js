import { StyleSheet } from "react-native";
import color from "../../constants/color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto-Light",
  },
  mtop: {
    marginVertical: 4,
  },
  loginLogo: {
    width: "100%",
    height: "70%",
    objectFit: "contain",
  },
  heading: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  pContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: color.buttonBackground,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 20,
  },
  buttonColor: {
    color: color.buttonColor,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 17,
  },
  homeContainer: {
    flex: 1,
    padding: 8,
  },
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  userProfileLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerContent: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    fontSize: 10,
    fontFamily: "Montserrat-Medium",
  },
  input: {
    fontSize: 18,
    borderRadius: 6,
    lineHeight: 22,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#dee1e2",
    color: "rgb(14, 14, 16)",
    backgroundColor: "#dee1e2",
    display: "flex",
    height: hp(8),
    marginBottom: 8,
    width: wp("80%"),
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    alignContent: "center",
  },
  errorText: {
    marginBottom: 4,
    color: "red",
  },
  coursesText: {
    textAlign: "center",
    padding: 4,
  },
});

export default styles;
