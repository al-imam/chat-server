import { FormEvent } from "react";
import SendMessage from "@app/components/SendMessage";
import useStore from "@app/hooks/useStore";

function SendMessageForm() {
  const [{ message }, updateStore] = useStore({ message: "" });

  async function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <form
      onSubmit={sendMessage}
      className="mx-auto sm-width sm:max-w-3xl "
      noValidate={true}
    >
      <SendMessage
        value={message}
        onChange={(e) => updateStore({ message: e.target.value })}
        name="message"
        placeholder="Send message"
        type="text"
      />
    </form>
  );
}

export default SendMessageForm;
