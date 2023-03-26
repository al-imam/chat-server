import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 w-sm-screen sm:w-[30rem] mx-auto sm:bg-[rgb(163,163,163)] mt-16  sm:bg-opacity-5 sm:backdrop-blur-3xl rounded sm:shadow-sm sm:px-6 py-12">
      <InputText placeholder="example@gmail.com" type="email" />
      <InputPassword placeholder="$^#23_zqx" />
      <Button child="Login" />
      <hr className="text-my-slate-200" />
      <ShortNotice />
    </form>
  );
}
