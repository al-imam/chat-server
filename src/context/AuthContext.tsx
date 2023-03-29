import { ReactNode, createContext, useEffect, useState } from "react";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "@app/initializeFirebase";

export interface AuthContextValueType {
  currentUser: User | null;
  singup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValueType | null>(null);

const auth = getAuth(app);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const destroy = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });

    return destroy;
  }, []);

  function singup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(): Promise<void> {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ singup, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
