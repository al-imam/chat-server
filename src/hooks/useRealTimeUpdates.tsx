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

export interface DocumentType {
  message: string;
  uid: string;
  id: string;
  photoURL: string;
  createdAt: Date;
}

const db = getFirestore(app);

function useRealTimeUpdates({ reference, limit = 30 }: Argument) {
  const [messages, setMessages] = useState<DocumentType[]>([]);
  useEffect(() => {
    const ref = query(
      collection(db, reference),
      orderBy("createdAt"),
      limitToLast(limit)
    );

    const destroy = onSnapshot(ref, (snapshot) => {
      const updatedData = snapshot.docs.map((snap) => {
        const { uid, photoURL, createdAt, message } = snap.data();

        return {
          message,
          id: snap.id,
          uid,
          photoURL,
          createdAt: new Date(createdAt * 1000),
        } as DocumentType;
      });

      setMessages(updatedData);
    });

    return destroy;
  }, [reference]);

  return messages;
}

export default useRealTimeUpdates;
