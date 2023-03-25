import { InputProps } from "@components/InputText";
import { EyeClose, Eye } from "@svg/Index";
import { useState } from "react";

type InputPasswordProps = Omit<InputProps, "type">;

const InputPassword: React.FunctionComponent<InputPasswordProps> = ({
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocus] = useState(false);

  return (
    <div
      className={`flex items-center bg-white rounded outline outline-1 outline-slate-200 group ${
        isFocused ? "outline-dark ring-4 ring-light" : ""
      }`}
    >
      <input
        className="w-full p-4 bg-white border-none rounded outline-none text-slate-900 outline-offset-0 caret-current placeholder:text-slate-400 placeholder:select-none password"
        type={open ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <button
        className="relative flex items-center justify-center h-8 mx-2 bg-black bg-opacity-0 border-none rounded-full outline-none aspect-square hover:bg-opacity-5 active:bg-opacity-10 focus-visible:bg-opacity-10"
        type="button"
        onClick={() => setOpen((p) => !p)}
      >
        <div className="flex items-center justify-center w-6 h-6 text-slate-400 hover:text-slate-600">
          {open ? <Eye /> : <EyeClose />}
        </div>
      </button>
    </div>
  );
};

export default InputPassword;
