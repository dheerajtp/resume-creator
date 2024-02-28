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
    if (!result.exists()) {
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
    return { status: false };
  }
};

const loginServices = {
  createUser,
};

export default loginServices;
