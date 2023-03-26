export interface InputProps {
  type: string;
  placeholder: string;
  disabled?: boolean;
}

const InputText: React.FunctionComponent<InputProps> = ({
  type = "text",
  placeholder,
  disabled = true,
}) => (
  <input
    className="p-4 bg-white border-none rounded outline-none text-my-slate-700 outline-offset-0 caret-current placeholder:text-my-slate-300 placeholder:select-none outline-1 outline-my-slate-200 focus:outline-dark focus:ring-4 focus:ring-light text"
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required
    disabled={disabled}
  />
);

export default InputText;
