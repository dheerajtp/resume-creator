import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import tokenCache from "../utils/token";
import { Provider } from "react-redux";
// import store from "../store/store";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ModalPortal } from "react-native-modals";

const HomeLayout = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Slot />
          <ModalPortal />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  );
};

export default HomeLayout;
