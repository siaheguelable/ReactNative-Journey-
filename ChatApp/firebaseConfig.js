import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyZaXEwVNObiuACHAISSbt7-e3OH_ek_M",
  authDomain: "chatapp-f2fc3.firebaseapp.com",
  projectId: "chatapp-f2fc3",
  storageBucket: "chatapp-f2fc3.firebasestorage.app",
  messagingSenderId: "54044690204",
  appId: "1:54044690204:web:4eab2f84aa08ef0654dcd9",
  measurementId: "G-E6YLTZ7WXY",
};

// Initialize Firebase App
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Authentication
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (e) {
  // If already initialized, just get the auth instance
  auth = getAuth(app);
}

// export
export { app, auth };
