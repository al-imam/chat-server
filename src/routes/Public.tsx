import useAuth from "@app/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

function Public({ children, to }: Props): ReactNode | null {
  const { currentUser } = useAuth();
  return currentUser !== null ? <Navigate to={to} replace={true} /> : children;
}

export default Public;
