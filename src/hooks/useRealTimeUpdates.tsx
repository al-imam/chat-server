import app from "@app/initializeFirebase";
import { useState, useEffect } from "react";
import {
  collection,
  getFirestore,
  query,
  orderBy,
  limitToLast,
  onSnapshot,
} from "firebase/firestore";

interface Argument {
  reference: string;
  limit?: number;
}

interface DocumentType {
  message: string;
  uid: string;
  id: string;
  photoURL: string;
  createdAt: Date;
}

const db = getFirestore(app);

function useRealTimeUpdates({ reference, limit = 30 }: Argument) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, reference),
        orderBy("createdAt"),
        limitToLast(limit)
      ),
      (snapshot) => {
        console.log(snapshot);
      }
    );
  }, [reference]);
}
