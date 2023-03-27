import { useState } from "react";
import { Eye } from "@svg/Index";

export default function ChatServer() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={`mx-auto w-[calc(100vw-3rem)] flex flex-col sm:max-w-3xl  py-4 h-[calc(100dvh-64px)] landscape:h-[calc(100vh-64px)] `}
    >
      <form className="mt-auto">
        <div
          className={`flex items-center bg-white rounded outline outline-1  group ${
            isFocus ? "outline-dark ring-4 ring-light" : "outline-my-slate-200"
          }`}
        >
          <input
            className="w-full p-4 bg-white border-none rounded outline-none text-my-slate-800 outline-offset-0 caret-current placeholder:text-my-slate-300 placeholder:select-none password"
            type="text"
            placeholder="send message"
            autoComplete="off"
            required
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <button
            className="relative flex items-center justify-center h-8 mx-2 bg-black bg-opacity-0 border-none rounded-full outline-none aspect-square hover:bg-opacity-5 active:bg-opacity-10 focus-visible:bg-opacity-10"
            type="button"
          >
            <Eye className="flex items-center justify-center w-6 h-6 text-slate-400 hover:text-slate-600" />
          </button>
        </div>
      </form>
    </div>
  );
}
