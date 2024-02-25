import { Image, Text, View } from "react-native";
import styles from "../../assets/styles/style";
import { useUser } from "@clerk/clerk-expo";
import constantImages from "../../constants/image";

const Header = () => {
  const { user } = useUser();
  console.log(user)
  //   user?.imageUrl ??
  return (
    <View style={styles.headerContent}>
      <Image
        source={{ uri: user?.imageUrl ?? constantImages.profile }}
        style={styles.userProfileLogo}
      />
      <Text style={styles.headerText}>{user?.fullName}</Text>
      {/* <FontAwesome name="filter" size={24} color="black" /> */}
    </View>
  );
};

export default Header;
