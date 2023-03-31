import useAuth from "@app/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
  to: string;
  element: JSX.Element;
}

function Private({ element, to }: Props): JSX.Element | null {
  const { currentUser } = useAuth();
  return currentUser === null ? <Navigate to={to} replace={true} /> : element;
}

export default Private;
