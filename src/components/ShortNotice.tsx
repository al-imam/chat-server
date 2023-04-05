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
    <div className="text-base text-center text-fg dark:text-slate-50">
      {description}
      <Link
        to={to}
        className="rounded outline-none text-primary hover:underline outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark dark:focus-visible:outline-transparent focus-visible:ring focus-visible:ring-light"
        aria-label={`link to ${to}`}
      >
        {text}
      </Link>
    </div>
  );
}
