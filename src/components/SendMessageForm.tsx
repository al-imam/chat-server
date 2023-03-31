import { FormEvent } from "react";
import { SendMessageIcon } from "@svg/Index";
import useStore from "@app/hooks/useStore";
import useCreateNewMessageSetter from "@app/hooks/useCreateNewMessageSetter";

const initialValue = {
  message: "",
  isFocus: false,
};

function SendMessageForm() {
  const [{ message, isFocus }, updateStore] = useStore(initialValue);

  const setNewMessage = useCreateNewMessageSetter("message");

  async function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (message.trim() === "") return updateStore(initialValue);
    updateStore(initialValue);
    await setNewMessage({ message });
  }

  return (
    <form
      onSubmit={sendMessage}
      className="mx-auto sm-width sm:max-w-3xl "
      noValidate={true}
    >
      <div
        className={`flex items-center bg-white rounded outline outline-1  group ${
          isFocus ? "outline-dark ring-4 ring-light" : "outline-fg-200"
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
        >
          <SendMessageIcon />
        </button>
      </div>
    </form>
  );
}

export default SendMessageForm;