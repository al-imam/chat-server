import lngType from "@app/utilitys/detectLanguage";
import { DocumentType } from "@app/hooks/useRealTimeUpdates";
import useAuth from "@app/hooks/useAuth";
import { useState } from "react";

export default function Message({ message, photoURL, uid }: DocumentType) {
  const [click, setClick] = useState(false);
  const { currentUser } = useAuth();

  const send = currentUser?.uid === uid ? false : true;

  const { bg, fg, character } = JSON.parse(photoURL) as {
    bg: string;
    fg: string;
    character: string;
  };

  return (
    <div className="mx-auto text-slate-400 sm-width sm:max-w-3xl group/hover">
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
        } text-sm ml-10 sm:ml-12 opacity-0 max-h-0 group-hover/hover:opacity-100 duration-500 group-hover/hover:max-h-10`}
      >
        2 second ago
      </p>
    </div>
  );
}
