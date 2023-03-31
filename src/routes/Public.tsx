import useAuth from "@app/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  to: string;
  element: JSX.Element;
}

function Public({ element, to }: Props): JSX.Element | null {
  const { currentUser } = useAuth();
  return currentUser !== null ? <Navigate to={to} replace={true} /> : element;
}

export default Public;
