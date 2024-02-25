import firebaseConfigurations from "../config/firebase";
import { ref, set, get, child } from "firebase/database";

const createStep = async ({
  uuid,
  step_one = {},
  step_two = {},
  step_three = {},
  step_four = {},
}) => {
  try {
    console.log(uuid, step_one, "inside create step");
    const dbRef = ref(firebaseConfigurations.database);
    let result = await get(child(dbRef, `steps/${uuid}`));
    console.log(result, "result");
    console.log(result.exists(), "exists or not");
    if (!result.exists()) {
      console.log("inside results doesn't exist");
      await set(ref(firebaseConfigurations.database, "steps/" + uuid), {
        uuid,
        step_one,
        step_two,
        step_three,
        step_four,
      });
    }
    return {
      status: true,
    };
  } catch (error) {
    console.error(error);
    return { status: false };
  }
};

const resumeServices = {
  createStep,
};

export default resumeServices;
