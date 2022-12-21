import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDugS1PkmD5LQaYQ3w8zTtVaXXn8UPyKVI",
  authDomain: "fir-store-images-9aa70.firebaseapp.com",
  projectId: "fir-store-images-9aa70",
  storageBucket: "fir-store-images-9aa70.appspot.com",
  messagingSenderId: "664699118069",
  appId: "1:664699118069:web:d3aec4d29fe60ff88440bc"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);