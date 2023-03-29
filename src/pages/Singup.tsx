import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";
import useAuth from "@app/hooks/useAuth";
import { FormEvent } from "react";

interface ElementsType {
  email: HTMLInputElement;
  password: HTMLInputElement;
  cp: HTMLInputElement;
}

export default function Singup() {
  const { singup } = useAuth();

  async function singupUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // @ts-ignore
    const elements = event.target.elements as ElementsType;
  }

  return (
    <section className="mx-auto mt-16 rounded w-sm-screen sm:w-[30rem] sm:bg-my-primary sm:bg-opacity-5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl sm:mb-12 text-my-slate-800">Singup</h1>
      <form
        onSubmit={singupUser}
        className="flex flex-col gap-4 py-12 mx-auto rounded w-sm-screen sm:w-[30rem] sm:bg-black sm:bg-opacity-5 sm:backdrop-blur-3xl sm:shadow-sm sm:px-6"
      >
        <InputText placeholder="example@gmail.com" type="email" name="email" />
        <InputPassword placeholder="$^#23_zqx" name="password" />
        <InputPassword placeholder="retype - $^#23_zqx" name="cp" />
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
