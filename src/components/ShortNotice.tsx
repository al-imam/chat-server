import { Link } from "react-router-dom";

export default function ShortNotice() {
  return (
    <div className="text-base text-center text-my-slate-800">
      Don't have account?{" "}
      <Link to="/singup" className="text-my-primary hover:underline">
        Singup
      </Link>
    </div>
  );
}
