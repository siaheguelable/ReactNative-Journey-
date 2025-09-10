import { Slot, useSegments, useRouter } from "expo-router";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { user } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof user === "undefined") return;
    const inApp = segment[0] === "(apps)" || segment[0] === "(tabs)";
    if (user && !inApp) {
      router.replace("/(tabs)/Chat");
    } else if (!user && inApp) {
      router.replace("/LogIn");
    }
  }, [user]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
