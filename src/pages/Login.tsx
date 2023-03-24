import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 w-sm-screen sm:w-[30rem] mx-auto bg-[#fff]  bg-opacity-50 backdrop-blur-md rounded shadow-sm overflow-hidden px-6 py-12">
      <InputText placeholder="Email" type="email" />
      <InputPassword placeholder="Password" />
    </form>
  );
}
