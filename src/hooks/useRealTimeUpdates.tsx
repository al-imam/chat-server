import app from "@app/initializeFirebase";
import useAuth from "@app/hooks/useAuth";
import { useState, useEffect } from "react";
import {
  collection,
  getFirestore,
  query,
  orderBy,
  limitToLast,
  onSnapshot,
  addDoc,
  serverTimestamp,
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
  const { currentUser } = useAuth();

  useEffect(() => {
    const destroy = onSnapshot(
      query(
        collection(db, reference),
        orderBy("createdAt"),
        limitToLast(limit)
      ),
      (snapshot) => {
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
      }
    );

    return destroy;
  }, [reference]);

  function setNewMessage({ message }: Pick<DocumentType, "message">) {
    if (currentUser === null) return;
    const ref = collection(db, reference);
    return addDoc(ref, {
      uid: currentUser.uid,
      message,
      photoURL: currentUser.photoURL,
      createdAt: serverTimestamp(),
    });
  }

  return { messages, setNewMessage };
}

export default useRealTimeUpdates;
