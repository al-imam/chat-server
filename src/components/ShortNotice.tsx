import { Link } from "react-router-dom";

export default function ShortNotice() {
  return (
    <div>
      Don't have account? <Link to="singup">Singup</Link>
    </div>
  );
}
