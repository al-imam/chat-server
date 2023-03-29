export interface InputProps {
  type: string;
  placeholder: string;
  disabled?: boolean;
}

const InputText: React.FunctionComponent<
  Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "className" | "required"
  >
> = ({ ...rest }) => (
  <input
    className="p-4 bg-white border-none rounded outline-none text-my-slate-700 outline-offset-0 caret-current placeholder:text-my-slate-300 placeholder:select-none outline-1 enabled:outline-my-slate-200 enabled:focus:outline-dark focus:ring-4 focus:ring-light disabled:bg-opacity-70 text"
    autoComplete="off"
    required
    {...rest}
  />
);

export default InputText;
