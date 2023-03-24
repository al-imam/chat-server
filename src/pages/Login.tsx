import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 w-sm-screen sm:w-[30rem] mx-auto bg-indigo-50 rounded shadow-sm overflow-hidden px-4 py-8">
      <InputText placeholder="Email" type="email" />
      <InputPassword placeholder="Password" />
    </form>
  );
}
