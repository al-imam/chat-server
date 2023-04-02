import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import { FormEvent } from "react";
import useStore from "@app/hooks/useStore";
import useAuth from "@app/hooks/useAuth";

interface InitialState {
  email: string;
  password: string;
}

const initialState: InitialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [{ email, password }, updateStore] = useStore(initialState);

  const { login } = useAuth();

  async function loginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await login({ email, password });
    updateStore(initialState);
  }

  return (
    <section className="mx-auto sm:mb-16 mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-primary/5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl transition-none sm:mb-12 text-fg dark:text-white">
        Login
      </h1>
      <form
        onSubmit={loginUser}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black/5 dark:sm:bg-white/[0.07] sm:backdrop-blur-3xl transition-none sm:shadow-sm sm:px-6"
      >
        <InputText
          value={email}
          onChange={(event) => updateStore({ email: event.target.value })}
          placeholder="example@gmail.com"
          type="email"
        />
        <InputPassword
          value={password}
          onChange={(event) => updateStore({ password: event.target.value })}
          placeholder="$^#23_zqx"
        />
        <Button child="Login" />
        <hr className="border-gray-300 dark:border-gray-600 " />
        <ShortNotice
          description="Don't have account? "
          to="/singup"
          text="Singup"
        />
      </form>
    </section>
  );
}
