import { ReactNode, createContext } from "react";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
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

  function login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ singup, login }}>
      {children}
    </AuthContext.Provider>
  );
}
