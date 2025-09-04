
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import Constant from 'expo-constants';
// firebase configuration

const firebaseConfig = {
  apiKey: Constant.manifest.extra.firebaseConfig.apiKey,
  authDomain: Constant.manifest.extra.firebaseConfig.authDomain,
  projectId: Constant.manifest.extra.firebaseConfig.projectId,
  storageBucket: Constant.manifest.extra.firebaseConfig.storageBucket,
  messagingSenderId: Constant.manifest.extra.firebaseConfig.messagingSenderId,
  appId: Constant.manifest.extra.firebaseConfig.appId,
  measurementId: Constant.manifest.extra.firebaseConfig.measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
