import { ReactNode, createContext } from "react";
import type { User, UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "@app/initializeFirebase";

export interface AuthContextValueType {
  currentUser: User | null;
  singup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<Partial<AuthContextValueType> | null>(
  null
);

const auth = getAuth(app);

export function AuthProvider({ children }: { children: ReactNode }) {
  function singup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ singup }}>{children}</AuthContext.Provider>
  );
}
