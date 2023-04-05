import lngType from "@app/utilitys/detectLanguage";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import useAuth from "@app/hooks/useAuth";
import relativeTimeFormatter from "@app/utilitys/relativeTime";
import useStore from "@app/hooks/useStore";

export default function Message({
  message,
  photoURL,
  uid,
  createdAt,
}: DocumentType) {
  const [{ enter, leave, hover }, updateStore] = useStore({
    enter: 0,
    leave: 0,
    hover: false,
  });

  const handleMouseEnter = () => {
    clearTimeout(leave);
    updateStore({
      enter: setTimeout(() => {
        updateStore({ hover: true });
      }, 250),
    });
  };

  const handleMouseLeave = () => {
    clearTimeout(enter);
    updateStore({
      leave: setTimeout(() => {
        updateStore({ hover: false });
      }, 250),
    });
  };

  const { currentUser } = useAuth();

  const send = currentUser?.uid === uid ? false : true;

  const { bg, fg, character } = JSON.parse(photoURL) as {
    bg: string;
    fg: string;
    character: string;
  };

  return (
    <div className="mx-auto sm-width sm:max-w-3xl">
      <div
        className={`relative flex gap-2 translate-x-[1px] ${
          send ? "items-start" : "flex-row-reverse items-end"
        }`}
      >
        {send && (
          <div
            style={{ backgroundColor: bg }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${
          send || "text-right"
        } text-slate-500 dark:text-slate-400 text-sm ml-10 sm:ml-12 opacity-0 h-0 transition-all duration-500 ${
          hover ? "opacity-100 h-5" : "pointer-events-none"
        }`}
      >
        {relativeTimeFormatter(createdAt)}
      </p>
    </div>
  );
}
