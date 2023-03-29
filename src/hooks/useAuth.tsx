import { AuthContext, AuthContextValueType } from "@app/context/AuthContext";
import { useContext } from "react";

function useAuth() {
  return useContext(AuthContext) as AuthContextValueType;
}

export default useAuth;
