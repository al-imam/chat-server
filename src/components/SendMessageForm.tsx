import { FormEvent } from "react";
import { SendMessageIcon } from "@svg/Index";
import useStore from "@app/hooks/useStore";
import useCreateNewMessageSetter from "@app/hooks/useCreateNewMessageSetter";
import useAuth from "@app/hooks/useAuth";

const initialValue = {
  message: "",
  isFocus: false,
};

function SendMessageForm() {
  const [{ message, isFocus }, updateStore] = useStore(initialValue);
  const { currentUser } = useAuth();

  const setNewMessage = useCreateNewMessageSetter("messages");

  async function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (message.trim() === "" || !currentUser) return updateStore(initialValue);

    await setNewMessage({ message, email: currentUser.email as string }, () =>
      updateStore(initialValue)
    );
  }

  return (
    <form
      onSubmit={sendMessage}
      className="mx-auto sm-width sm:max-w-3xl"
      noValidate={true}
    >
      <div
        className={`flex items-center bg-white rounded outline dark:outline-transparent outline-1  group ${
          isFocus
            ? "outline-dark dark:outline-transparent ring-4 ring-light"
            : "outline-fg-200"
        }`}
      >
        <input
          value={message}
          onChange={(e) => updateStore({ message: e.target.value })}
          onFocus={() => updateStore({ isFocus: true })}
          onBlur={() => updateStore({ isFocus: false })}
          placeholder="Send message"
          className="w-full p-4 bg-white border-none rounded outline-none text-my-slate-800 outline-offset-0 caret-current placeholder:text-fg-300 placeholder:select-none password"
          autoComplete="off"
          required
        />
        <button
          className="flex-grow mr-3 rounded-sm outline-none text-primary hover:enabled:text-primary-hover active:enabled:text-primary-active focus-visible:outline-4 focus-visible:outline-light focus-visible:outline-offset-0 disabled:opacity-50"
          type="submit"
          disabled={!message}
          aria-label="send message"
        >
          <SendMessageIcon />
        </button>
      </div>
    </form>
  );
}

export default SendMessageForm;
