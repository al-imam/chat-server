import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import { FormEvent } from "react";
import useObjectStore from "use-object-store";
import useAuth from "@app/hooks/useAuth";
import ErrorAlert from "@app/components/ErrorAlert";
import emailRegex from "@app/utilitys/regex";

interface InitialState {
  email: string;
  password: string;
  loading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
};

interface ELEMENTS {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export default function Login() {
  const [{ email, password, loading, error }, updateStore] =
    useObjectStore(initialState);

  const { login } = useAuth();

  async function loginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateStore({ loading: true, error: null });
    /* @ts-ignore - react don't export full type of form event */
    const { email: eI, password: pI } = event.target.elements as ELEMENTS;

    if (!email.match(emailRegex)) {
      eI.focus();
      return updateStore({
        loading: false,
        error: "Enter a valid email 😑",
      });
    }

    if (password.trim().length <= 5) {
      pI.focus();
      return updateStore({
        password: password.trim() === "" ? "" : password,
        loading: false,
        error: "Password required 6 character 😏",
      });
    }

    try {
      await login({ email, password });
      return updateStore(initialState);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        return updateStore({
          loading: false,
          error: "Account not exist 😒",
        });
      }

      if (error.code === "auth/wrong-password") {
        return updateStore({
          loading: false,
          error: "Email and password don't match 😑",
        });
      }

      if (error.code === "auth/network-request-failed") {
        return updateStore({
          loading: false,
          error: "Network issue try later 😓",
        });
      }

      console.dir(error);
      return updateStore({
        loading: false,
        error: "Something went wrong! 😓",
      });
    }
  }

  return (
    <section className="mx-auto sm:mb-16 mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-primary/5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl transition-none sm:mb-12 text-fg dark:text-white">
        Login
      </h1>
      <form
        onSubmit={loginUser}
        noValidate={true}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black/5 dark:sm:bg-white/[0.07] sm:backdrop-blur-3xl transition-none sm:shadow-sm sm:px-6"
      >
        {error === null || (
          <ErrorAlert
            error={error}
            close={() => updateStore({ error: null })}
          />
        )}
        <InputText
          value={email}
          onChange={(event) => updateStore({ email: event.target.value })}
          placeholder="example@gmail.com"
          type="email"
          disabled={loading}
          name="email"
        />
        <InputPassword
          value={password}
          onChange={(event) => updateStore({ password: event.target.value })}
          placeholder="$^#23_zqx"
          disabled={loading}
          name="password"
        />
        <Button child="Login" disabled={loading} aria-label="Login button" />
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
