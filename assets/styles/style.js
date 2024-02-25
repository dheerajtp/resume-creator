import { StyleSheet } from "react-native";
import color from "../../constants/color";

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
});

export default styles;
