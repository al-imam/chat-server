export interface InputProps {
  type: string;
  placeholder: string;
  disabled?: boolean;
}

const InputText: React.FunctionComponent<InputProps> = ({
  type = "text",
  placeholder,
  disabled = false,
}) => (
  <input
    className="p-4 bg-white border-none rounded outline-none text-my-slate-700 outline-offset-0 caret-current placeholder:text-my-slate-300 placeholder:select-none outline-1 enabled:outline-my-slate-200 enabled:focus:outline-dark focus:ring-4 focus:ring-light disabled:bg-opacity-70 text"
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required
    disabled={disabled}
  />
);

export default InputText;
