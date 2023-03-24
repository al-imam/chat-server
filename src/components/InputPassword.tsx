import { InputProps } from "@components/InputText";
import { EyeClose, Eye } from "@svg/Index";
import { useState } from "react";

type InputPasswordProps = Omit<InputProps, "type">;

const InputPassword: React.FunctionComponent<InputPasswordProps> = ({
  placeholder,
  dispatch,
  value,
  ac,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <input
        className="inputs password"
        value={value}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(evt.currentTarget.value)
        }
        type={open ? "text" : "password"}
        placeholder={placeholder}
        autoComplete={ac}
        required
      />
      <button className="seen" type="button" onClick={() => setOpen((p) => !p)}>
        <div className="eye">{open ? <Eye /> : <EyeClose />}</div>
      </button>
    </div>
  );
};

export default InputPassword;
