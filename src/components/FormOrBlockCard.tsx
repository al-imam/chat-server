import useAuth from "@app/hooks/useAuth";
import SendMessageForm from "./SendMessageForm";

function FormOrBlockCard() {
  const { currentUser } = useAuth();

  return currentUser?.displayName === "block" ? (
    <p className="mx-auto backdrop-blur-sm text-center bg-black/10 dark:bg-white/10 text-black dark:text-white font-primary pt-2 pb-4 rounded-t-md sm-width sm:max-w-3xl -mb-4">
      You can't reply you're blocked
    </p>
  ) : (
    <SendMessageForm />
  );
}

export default FormOrBlockCard;
