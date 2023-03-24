export interface InputProps {
  type: string;
  placeholder: string;
  /*   dispatch: (value: string) => void;
  value: string; */
}

const InputText: React.FunctionComponent<InputProps> = ({
  type = "text",
  placeholder,
  /* dispatch,
  value, */
}) => (
  <input
    /* value={value}
    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(evt.currentTarget.value)
    } */
    className="p-4 bg-white border-none rounded outline-none text-slate-900 outline-offset-0 caret-current placeholder:text-slate-400 placeholder:select-none outline-1 outline-slate-200 focus:outline-dark focus:ring-4 focus:ring-light text"
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required
  />
);

export default InputText;
