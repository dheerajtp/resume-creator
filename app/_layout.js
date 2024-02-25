import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import tokenCache from "../utils/token";

const HomeLayout = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Slot />
    </ClerkProvider>
  );
};

export default HomeLayout;
