export interface InputProps {
  type: string;
  placeholder: string;
  dispatch: (value: string) => void;
  value: string;
  ac?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  type = "text",
  placeholder,
  dispatch,
  value,
  ac,
}) => (
  <input
    value={value}
    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(evt.currentTarget.value)
    }
    className=""
    type={type}
    placeholder={placeholder}
    autoComplete={ac}
    required
  />
);

export default Input;
