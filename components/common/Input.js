import { TextInput } from "react-native";
import styles from "../../assets/styles/style";

const Input = ({ value }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      editable={false}
      selectTextOnFocus={false}
    />
  );
};

export default Input;
