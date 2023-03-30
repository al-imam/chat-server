import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import useAuth from "@app/hooks/useAuth";
import { FormEvent } from "react";
import useStore from "@app/hooks/useStore";

export interface InitialState {
  email: string;
  password: string;
  cp: string;
}

const initialState: InitialState = {
  email: "",
  password: "",
  cp: "",
};

export default function Singup() {
  const [{ email, password, cp }, updateState] = useStore(initialState);

  const { singup } = useAuth();

  async function singupUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await singup({ email, password });
    updateState(initialState);
  }

  return (
    <section className="mx-auto mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-my-primary sm:bg-opacity-5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl sm:mb-12 text-my-slate-800">Singup</h1>
      <form
        onSubmit={singupUser}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black sm:bg-opacity-5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6"
      >
        <InputText
          value={email}
          onChange={(event) => updateState({ email: event.target.value })}
          placeholder="example@gmail.com"
          type="email"
          name="email"
        />
        <InputPassword
          value={password}
          onChange={(event) => updateState({ password: event.target.value })}
          placeholder="$^#23_zqx"
          name="password"
        />
        <InputPassword
          value={cp}
          onChange={(event) => updateState({ cp: event.target.value })}
          placeholder="retype - $^#23_zqx"
          name="cp"
        />
        <Button child="Singup" />
        <hr className="border-gray-300 " />
        <ShortNotice
          description="Already have account? "
          to="/login"
          text="Login"
        />
      </form>
    </section>
  );
}
