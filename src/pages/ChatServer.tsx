import { useState } from "react";
import { SendMessageIcon } from "@svg/Index";

export default function ChatServer() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={`mx-auto w-[calc(100vw-3rem)] flex flex-col sm:max-w-3xl  py-4 supports-[height:100dvh]:h-[calc(100dvh-64px)] h-[calc(100vh-64px)] landscape:h-[calc(100vh-64px)] `}
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
            placeholder="Send message"
            autoComplete="off"
            required
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <button
            className="flex-grow mr-3 rounded-sm outline-none text-my-primary hover:text-my-hover active:text-my-active focus-visible:outline-4 focus-visible:outline-light focus-visible:outline-offset-0"
            type="submit"
          >
            <SendMessageIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
