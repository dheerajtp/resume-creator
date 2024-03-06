import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Button, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/user";
import { gotoFirstState } from "../../store/slices/steps";


const SignOut = () => {
  const dispatch = useDispatch();
  const { isLoaded, userId, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
          router.push("/login");
          dispatch(removeUser());
          dispatch(gotoFirstState())
        }}
      />
    </View>
  );
};

export default SignOut;
