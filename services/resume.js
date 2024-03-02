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
    const steps = { step_one, step_two, step_three, step_four };

    const dbRef = ref(firebaseConfigurations.database);
    let result = await get(child(dbRef, `steps/${uuid}`));

    if (!result.exists()) {
      await set(ref(firebaseConfigurations.database, "steps/" + uuid), {
        uuid,
        step_one,
        step_two,
        step_three,
        step_four,
      });
    } else {
      const data = result.val();
      const nonEmptyStepKeys = Object.keys(steps).filter(
        (key) => Object.keys(steps[key]).length > 0
      );

      if (nonEmptyStepKeys.length > 0) {
        data[nonEmptyStepKeys[0]] = steps[nonEmptyStepKeys[0]];
        const dbRef = ref(firebaseConfigurations.database, `steps/${uuid}`);
        await set(dbRef, data);
      }
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
