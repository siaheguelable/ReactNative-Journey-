import { Slot, useSegments, useRouter } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const MainLayout = () => {
  const { user, isAuthenticated } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;
    const inApp = segment[0] === "(apps)" || segment[0] === "(tabs)";
    if (user && !inApp) {
      router.replace("/(tabs)/Chat");
    } else if (!user && inApp) {
      router.replace("/LogIn");
    }
  }, [user, isAuthenticated]);

  // Show loading indicator while checking authentication
  if (typeof isAuthenticated === "undefined") {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
