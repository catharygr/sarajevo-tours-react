import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDCLNxgeeg50gXH7akpU89F6G7BZgAEqzw",
  authDomain: "sarajevo-turismo.firebaseapp.com",
  projectId: "sarajevo-turismo",
  storageBucket: "sarajevo-turismo.appspot.com",
  messagingSenderId: "737620949098",
  appId: "1:737620949098:web:cae494a6829c3a22eb3213",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const productRef = collection(db, "productos");
export const skiQuery = query(
  collection(db, "productos"),
  where("category", "==", "esqui")
);
export const mtbQuery = query(
  collection(db, "productos"),
  where("category", "==", "mtb")
);
export const walkQuery = query(
  collection(db, "productos"),
  where("category", "==", "caminar")
);

export async function getProducts(query) {
  const querySnapshot = await getDocs(query);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}
