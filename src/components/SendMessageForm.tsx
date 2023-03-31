import { FormEvent } from "react";
import SendMessage from "@app/components/SendMessage";

function SendMessageForm() {
  async function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <form
      onSubmit={sendMessage}
      className="mx-auto sm-width sm:max-w-3xl "
      noValidate={true}
    >
      <SendMessage name="message" placeholder="Send message" type="text" />
    </form>
  );
}

export default SendMessageForm;
