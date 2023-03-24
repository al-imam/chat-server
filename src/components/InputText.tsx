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
    className=""
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required
  />
);

export default InputText;
