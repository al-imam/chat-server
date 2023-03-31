import { useState } from "react";
import { SendMessageIcon } from "@svg/Index";

export default function SendMessage({
  ...rest
}: Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "className" | "onBlur" | "onFocus" | "autoComplete" | "required"
>) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={`flex items-center bg-white rounded outline outline-1  group ${
        isFocus ? "outline-dark ring-4 ring-light" : "outline-fg-200"
      }`}
    >
      <input
        className="w-full p-4 bg-white border-none rounded outline-none text-my-slate-800 outline-offset-0 caret-current placeholder:text-fg-300 placeholder:select-none password"
        autoComplete="off"
        required
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
      <button
        className="flex-grow mr-3 rounded-sm outline-none text-primary hover:text-primary-hover active:text-primary-active focus-visible:outline-4 focus-visible:outline-light focus-visible:outline-offset-0"
        type="submit"
      >
        <SendMessageIcon />
      </button>
    </div>
  );
}
