import firebaseConfigurations from "../config/firebase";
import { ref, set, get, child } from "firebase/database";
import * as Crypto from "expo-crypto";

const createUser = async (
  firstName,
  hasImage = false,
  imageUrl = "",
  lastName
) => {
  try {
    const uuid = Crypto.randomUUID();
    const dbRef = ref(firebaseConfigurations.database);
    let result = await get(child(dbRef, `users/${firstName} ${lastName}`));
    console.log(result);
    console.log(result.exists());
    if (!result.exists()) {
      console.log("inside create", firstName, lastName);
      set(
        ref(
          firebaseConfigurations.database,
          "users/" + ` ${firstName} ${lastName}`
        ),
        {
          name: `${firstName} ${lastName}`,
          hasImage,
          imageUrl,
          uuid,
        }
      );
    }
    return {
      status: true,
      uuid,
    };
  } catch (error) {
    console.error(error);
    return { status: false };
  }
};

const loginServices = {
  createUser,
};

export default loginServices;
