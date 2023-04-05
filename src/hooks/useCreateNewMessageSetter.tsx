import app from "@app/initializeFirebase";
import useAuth from "@app/hooks/useAuth";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import checkProfanity from "@app/utilitys/checkProfanity";

const db = getFirestore(app);

function useCreateNewMessageSetter(reference: string) {
  const { currentUser, blockCurrentUser } = useAuth();

  return async function setNewMessage({
    message,
    email,
    callBack,
  }: Pick<DocumentType, "message"> & { email: string; callBack?: () => void }) {
    if (currentUser === null || currentUser.displayName === "block") return;

    const ref = collection(db, reference);

    callBack?.();

    if (checkProfanity(message)) {
      await addDoc(ref, {
        uid: currentUser.uid,
        message,
        photoURL: null,
        createdAt: serverTimestamp(),
        email: email,
      }).catch((e) => {
        console.dir({ checkProfanity: e });
      });

      return await blockCurrentUser().catch((e) => {
        console.dir({ blockCurrentUser: e });
      });
    }

    return await addDoc(ref, {
      uid: currentUser.uid,
      message,
      photoURL: currentUser.photoURL,
      createdAt: serverTimestamp(),
      email: email,
    }).catch((e) => {
      console.dir({ addValidMessage: e });
    });
  };
}

export default useCreateNewMessageSetter;
