import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import useAuth from "@app/hooks/useAuth";
import { FormEvent } from "react";
import useStore from "@app/hooks/useStore";
import getRandomColor from "@app/utilitys/getRandomColor";
import emailRegex from "@app/utilitys/regex";
import ErrorAlert from "@app/components/ErrorAlert";

interface InitialState {
  email: string;
  password: string;
  cp: string;
  loading: boolean;
  error: null | string;
}

interface ELEMENTS {
  e: HTMLInputElement;
  p: HTMLInputElement;
  cp: HTMLInputElement;
}

const initialState: InitialState = {
  email: "",
  password: "",
  cp: "",
  loading: false,
  error: null,
};

export default function Singup() {
  const [{ email, password, cp, loading, error }, updateStore] =
    useStore(initialState);

  const { singup, updateUserProfile } = useAuth();

  async function singupUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateStore({ error: null, loading: true });
    /* @ts-ignore - react don't export full type of form event */
    const { e, cp: c, p } = event.target.elements as ELEMENTS;

    if (!email.match(emailRegex)) {
      e.focus();
      return updateStore({
        loading: false,
        error: "Enter a valid email 😑",
      });
    }

    if (password.trim().length <= 5) {
      p.focus();
      return updateStore({
        password: password.trim() === "" ? "" : password,
        loading: false,
        error: "Password required 6 character 😏",
      });
    }

    if (cp !== password) {
      c.focus();
      return updateStore({
        cp: cp.trim() === "" ? "" : cp,
        loading: false,
        error: "Passwords don't match 🫤",
      });
    }

    try {
      const userCredential = await singup({ email, password });
      await updateUserProfile(
        userCredential.user,
        JSON.stringify({ ...getRandomColor(), character: email.at(0) })
      );
      return updateStore(initialState);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        return updateStore({
          loading: false,
          error: "Email already in use 😶‍🌫️",
        });
      }

      if (error.code === "auth/network-request-failed") {
        return updateStore({
          loading: false,
          error: "Network issue try later 🥹",
        });
      }

      console.dir(error);
      return updateStore({ loading: false, error: "Something went wrong 🥹" });
    }
  }

  return (
    <section className="mx-auto sm:mb-16 mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-primary/5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl sm:mb-12 text-fg dark:text-white">Singup</h1>
      <form
        onSubmit={singupUser}
        noValidate={true}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black/5 dark:sm:bg-white/[0.07] sm:backdrop-blur-3xl sm:shadow-sm sm:px-6"
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
          disabled={loading}
          placeholder="example@gmail.com"
          type="email"
          name="e"
        />
        <InputPassword
          value={password}
          onChange={(event) => updateStore({ password: event.target.value })}
          disabled={loading}
          placeholder="$^#23_zqx"
          name="p"
        />
        <InputPassword
          value={cp}
          onChange={(event) => updateStore({ cp: event.target.value })}
          disabled={loading}
          placeholder="again - $^#23_zqx"
          name="cp"
        />
        <Button child="Singup" disabled={loading} />
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
