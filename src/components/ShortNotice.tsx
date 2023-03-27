import { Link } from "react-router-dom";

interface ShortNoticeProps {
  description: string;
  to: string;
  text: string;
}

export default function ShortNotice({
  description,
  to,
  text,
}: ShortNoticeProps) {
  return (
    <div className="text-base text-center text-my-slate-800">
      {description}
      <Link to={to} className="text-my-primary hover:underline">
        {text}
      </Link>
    </div>
  );
}
