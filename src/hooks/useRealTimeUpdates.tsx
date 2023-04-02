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
  createdAt: number;
  email: string;
}

function saveLocal(save: DocumentType[]) {
  localStorage.setItem("chat-server-message", JSON.stringify(save));
}

function getLocalData(): DocumentType[] {
  const local = localStorage.getItem("chat-server-message");
  if (local === null) return [];
  return JSON.parse(local) as DocumentType[];
}

const db = getFirestore(app);

function useRealTimeUpdates({ reference, limit = 30 }: Argument) {
  const [messages, setMessages] = useState<DocumentType[]>([]);

  useEffect(() => {
    if (navigator.onLine === false) setMessages(getLocalData());

    const ref = query(
      collection(db, reference),
      orderBy("createdAt"),
      limitToLast(limit)
    );

    const destroy = onSnapshot(
      ref,
      (snapshot) => {
        console.log(snapshot);
        const updatedData = snapshot.docs.map((snap) => {
          const { uid, photoURL, createdAt, message, email } = snap.data();

          return {
            message,
            id: snap.id,
            uid,
            photoURL,
            createdAt: createdAt * 1000,
            email,
          } as DocumentType;
        });

        saveLocal(updatedData);
        setMessages(updatedData);
      },
      (error) => {
        console.dir({ error, location: "onSnapshot" });
      }
    );

    return destroy;
  }, [reference]);

  return messages;
}

export default useRealTimeUpdates;
