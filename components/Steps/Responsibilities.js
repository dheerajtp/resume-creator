import { Text, View } from "react-native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import styles from "../../assets/styles/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import descriptionValidation from "../../utils/validators/description";
import FormField from "../common/FormField";
import Button from "../common/Button";

const Responsibilities = ({ modalVisible, setModalVisible }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(descriptionValidation),
  });

  const onSubmit = async (data) => {
    console.log("onSubmit called");
    console.log(data);
    reset();
  };

  return (
    <View>
      <BottomModal
        visible={modalVisible}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
      >
        <ModalContent>
          <View style={styles.container}>
            <View style={styles.marginVertical}>
              <Text>Add Work Experience</Text>
            </View>
            <FormField
              name="description"
              control={control}
              errors={errors}
              placeholder="Improved API efficiency by 30%"
            />
            <View>
              <Button
                title="Next"
                type="submit"
                onPress={handleSubmit(onSubmit)}
              />
              <Button title="Close" onPress={()=>setModalVisible(false)} />
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default Responsibilities;
