import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import useAuth from "@app/hooks/useAuth";
import { FormEvent } from "react";
import useStore from "@app/hooks/useStore";

interface InitialState {
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
  const [{ email, password, cp }, updateStore] = useStore(initialState);

  const { singup } = useAuth();

  async function singupUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await singup({ email, password });
    updateStore(initialState);
  }

  return (
    <section className="mx-auto sm:mb-16 mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-primary/5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl sm:mb-12 text-fg dark:text-white">Singup</h1>
      <form
        onSubmit={singupUser}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black/5 dark:sm:bg-white/[0.07] sm:backdrop-blur-3xl sm:shadow-sm sm:px-6"
      >
        <InputText
          value={email}
          onChange={(event) => updateStore({ email: event.target.value })}
          placeholder="example@gmail.com"
          type="email"
          name="email"
        />
        <InputPassword
          value={password}
          onChange={(event) => updateStore({ password: event.target.value })}
          placeholder="$^#23_zqx"
          name="password"
        />
        <InputPassword
          value={cp}
          onChange={(event) => updateStore({ cp: event.target.value })}
          placeholder="again - $^#23_zqx"
          name="cp"
        />
        <Button child="Singup" />
        <hr className="border-gray-300 dark:border-gray-600 " />
        <ShortNotice
          description="Already have account? "
          to="/login"
          text="Login"
        />
      </form>
    </section>
  );
}
