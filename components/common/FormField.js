import { Controller } from "react-hook-form";
import { View, TextInput, Text } from "react-native";
import styles from "../../assets/styles/style";

const FormField = ({
  name,
  control,
  errors,
  placeholder,
  keyboardType,
  secureTextEntry,
}) => (
  <View>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInput
          placeholder={placeholder}
          onChangeText={field.onChange}
          value={field.value}
          style={styles.input}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      )}
    />
    {errors && errors[name] && (
      <Text style={styles.errorText}>{errors[name].message}</Text>
    )}
  </View>
);

export default FormField;
