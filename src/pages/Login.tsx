import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 w-sm-screen sm:w-[30rem] mx-auto sm:bg-[#fff]  sm:bg-opacity-50 sm:backdrop-blur-md rounded sm:shadow-sm sm:px-6 py-12">
      <InputText placeholder="Email" type="email" />
      <InputPassword placeholder="Password" />
      <Button child="Login" />
      <hr className="text-my-slate-200" />
      <ShortNotice />
    </form>
  );
}
