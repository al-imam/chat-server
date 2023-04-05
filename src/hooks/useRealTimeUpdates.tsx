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
  email: string;
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

    const destroy = onSnapshot(
      ref,
      (snapshot) => {
        const updatedData = snapshot.docs.map((snap) => {
          const { uid, photoURL, createdAt, message, email } = snap.data({
            serverTimestamps: "estimate",
          });

          return {
            message,
            id: snap.id,
            uid,
            photoURL,
            createdAt: createdAt.toDate(),
            email,
          } as DocumentType;
        });

        setMessages(updatedData);
      },
      (error) => {
        console.dir({ onSnapshot: error });
      }
    );

    return destroy;
  }, [reference]);

  return messages;
}

export default useRealTimeUpdates;
