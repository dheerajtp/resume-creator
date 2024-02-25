import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import tokenCache from "../utils/token";
import { Provider } from "react-redux";
import store from "../store/store";

const HomeLayout = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <Slot />
      </Provider>
    </ClerkProvider>
  );
};

export default HomeLayout;
