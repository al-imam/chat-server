import SendMessage from "@app/components/SendMessage";
import Message from "@app/components/Message";
import { FormEvent } from "react";

export default function ChatServer() {
  function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <div
      className={`flex flex-col py-4 gap-4 supports-[height:100dvh]:h-[calc(100dvh-64px)] h-[calc(100vh-64px)] landscape:h-[calc(100vh-64px)] `}
    >
      <div className="flex flex-col gap-6 mt-auto overflow-x-hidden overflow-y-scroll chat-room">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <form
        onSubmit={sendMessage}
        className="w-[calc(100vw-3rem)] sm:max-w-3xl mx-auto "
        noValidate={true}
      >
        <SendMessage />
      </form>
    </div>
  );
}
