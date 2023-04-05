import { ReactNode, createContext, useEffect, useState } from "react";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "@app/initializeFirebase";

type sing = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => Promise<UserCredential>;

export interface AuthContextValueType {
  currentUser: User | null;
  singup: sing;
  login: sing;
  logout: () => Promise<void>;
  updateUserProfile: (user: User, colors: string) => Promise<void>;
  blockCurrentUser: () => Promise<void> | undefined;
}

export const AuthContext = createContext<AuthContextValueType | null>(null);

const auth = getAuth(app);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const destroy = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
      setWait(false);
    });

    return destroy;
  }, []);

  function singup({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function updateUserProfile(user: User, info: string) {
    return updateProfile(user, { photoURL: info });
  }

  function logout(): Promise<void> {
    return signOut(auth);
  }

  function blockCurrentUser() {
    if (currentUser === null) return;
    return updateProfile(currentUser, { displayName: "block" });
  }

  return (
    <AuthContext.Provider
      value={{
        singup,
        login,
        logout,
        currentUser,
        updateUserProfile,
        blockCurrentUser,
      }}
    >
      {wait || children}
    </AuthContext.Provider>
  );
}
