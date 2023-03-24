import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";

export default function Login() {
  return (
    <form>
      <InputText placeholder="Email" type="email" />
      <InputPassword placeholder="Password" />
    </form>
  );
}
