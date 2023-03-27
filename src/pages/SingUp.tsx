import InputPassword from "@app/components/InputPassword";
import InputText from "@app/components/InputText";
import Button from "@app/components/Button";
import ShortNotice from "@app/components/ShortNotice";

export default function SingUp() {
  return (
    <section className="w-sm-screen sm:w-[30rem] mx-auto sm:bg-my-primary mt-16  sm:bg-opacity-5 sm:backdrop-blur-3xl rounded sm:shadow-sm sm:px-6 sm:py-12">
      <h1 className="text-4xl sm:mb-12 text-my-slate-800">Singup</h1>
      <form className="flex flex-col gap-4 w-sm-screen sm:w-[30rem] mx-auto sm:bg-black sm:bg-opacity-5 sm:backdrop-blur-3xl rounded sm:shadow-sm sm:px-6 py-12">
        <InputText placeholder="example@gmail.com" type="email" />
        <InputPassword placeholder="$^#23_zqx" />
        <Button child="Login" />
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
