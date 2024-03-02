import { TextInput } from "react-native";
import styles from "../../assets/styles/style";

const Input = ({ value }) => {
  return (
    <TextInput
      style={styles.input}
      multiline
      value={value}
      editable={false}
      selectTextOnFocus={false}
      numberOfLines={4}
      maxLength={300}
    />
  );
};

export default Input;
