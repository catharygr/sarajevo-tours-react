import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

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

// Data base configuracion
const db = getFirestore(app);
const productRef = collection(db, "productos");

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(productRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return dataArr;
  } catch (err) {
    console.log(err);
  }
}

// Auth. configuracion
export const auth = getAuth(app);
