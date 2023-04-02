import app from "@app/initializeFirebase";
import useAuth from "@app/hooks/useAuth";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(app);

function useCreateNewMessageSetter(reference: string) {
  const { currentUser } = useAuth();

  return function setNewMessage({
    message,
    email,
  }: Pick<DocumentType, "message"> & { email: string }) {
    if (currentUser === null) return;
    const ref = collection(db, reference);
    return addDoc(ref, {
      uid: currentUser.uid,
      message,
      photoURL: currentUser.photoURL,
      createdAt: serverTimestamp(),
      email: email,
    });
  };
}

export default useCreateNewMessageSetter;
