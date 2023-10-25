import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXsBXXczRMZCes8t4iZWZxmmBRwvGdC5c",
  authDomain: "genesisshop-bc8de.firebaseapp.com",
  projectId: "genesisshop-bc8de",
  storageBucket: "genesisshop-bc8de.appspot.com",
  messagingSenderId: "91353248071",
  appId: "1:91353248071:web:999b81699e7a2828a71c62",
};

const fb = initializeApp(firebaseConfig);

export { fb };
