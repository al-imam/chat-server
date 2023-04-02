import lngType from "@app/utilitys/detectLanguage";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import useAuth from "@app/hooks/useAuth";

export default function Message({ message, photoURL, uid }: DocumentType) {
  const { currentUser } = useAuth();

  const send = currentUser?.uid === uid ? false : true;

  const { bg, fg, character } = JSON.parse(photoURL) as {
    bg: string;
    fg: string;
    character: string;
  };

  return (
    <div
      className={`sm-width sm:max-w-3xl mx-auto relative flex gap-2 translate-x-[1px] ${
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
            className="relative text-2xl uppercase sm:text-4xl top-[2px] font-prime"
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
  );
}
