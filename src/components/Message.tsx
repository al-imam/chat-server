import lngType from "@app/utilitys/detectLanguage";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import useAuth from "@app/hooks/useAuth";
import relativeTimeFormatter from "@app/utilitys/relativeTime";

export default function Message({
  message,
  photoURL,
  uid,
  createdAt,
}: DocumentType) {
  const { currentUser } = useAuth();

  const send = currentUser?.uid === uid ? false : true;

  const { bg, fg, character } = JSON.parse(photoURL) as {
    bg: string;
    fg: string;
    character: string;
  };

  return (
    <div className="mx-auto text-slate-400 sm-width sm:max-w-3xl supports-[not_selector(:has(p:hover))]:[&:hover>_.time]:opacity-100 supports-[not_selector(:has(p:hover))]:[&:hover>_.time]:max-h-10">
      <div
        className={`[&:has(p:hover,div:hover)+.time]:max-h-10 [&:has(:is(p,div):hover)+.time]:opacity-100  relative flex gap-2 translate-x-[1px] ${
          send ? "items-start" : "flex-row-reverse items-end"
        }`}
      >
        {send && (
          <div
            style={{ backgroundColor: bg }}
            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 "
          >
            <span
              style={{ color: fg }}
              className="text-xl uppercase sm:text-3xl font-changa-one"
            >
              {character}
            </span>
          </div>
        )}
        <p
          className={`w-[fit-content] max-w-[65%] md:max-w-[55%] min-h-[40px] flex items-center rounded-md p-2 backdrop-blur-lg ${
            send
              ? "bg-black/5 dark:bg-white/5 text-fg dark:text-slate-50"
              : "bg-[#0b93f6]/70 dark:bg-[#0b93f6]/90 text-white"
          } ${lngType(message) === "bangla" ? "font-bangla" : "font-primary"}`}
        >
          {message}
        </p>
      </div>
      <p
        className={`${
          send || "text-right"
        } time pointer-events-none text-sm ml-10 sm:ml-12 opacity-0 max-h-0 transition-all duration-500`}
      >
        {relativeTimeFormatter(createdAt)}
      </p>
    </div>
  );
}
