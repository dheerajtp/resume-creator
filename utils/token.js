import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken: async (key) => {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken: (key, value) => {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default tokenCache;
