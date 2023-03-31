import SendMessage from "@app/components/SendMessage";
import Message from "@app/components/Message";
import { FormEvent } from "react";
import useRealTimeUpdates from "@app/hooks/useRealTimeUpdates";

export default function ChatServer() {
  const { messages, setNewMessage } = useRealTimeUpdates({
    reference: "message",
  });

  async function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    /* @ts-ignore */
    const messageInput = evt.target.elements.message;
    await setNewMessage({ message: messageInput.value });
    messageInput.value = "";
  }

  return (
    <div
      className={`flex flex-col gap-4 py-4 supports-[height:100dvh]:height-subtract-nav-dvh height-subtract-nav-vh landscape:height-subtract-nav-vh `}
    >
      <div className="flex flex-col gap-3 mt-auto overflow-x-hidden overflow-y-visible mask-image-gradient sm:gap-6 chat-room">
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
      <form
        onSubmit={sendMessage}
        className="mx-auto sm-width sm:max-w-3xl "
        noValidate={true}
      >
        <SendMessage name="message" placeholder="Send message" type="text" />
      </form>
    </div>
  );
}
