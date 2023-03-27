import SendMessage from "@app/components/SendMessage";
import { FormEvent } from "react";

export default function ChatServer() {
  function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <div
      className={`mx-auto w-[calc(100vw-3rem)] flex flex-col sm:max-w-3xl  py-4 supports-[height:100dvh]:h-[calc(100dvh-64px)] h-[calc(100vh-64px)] landscape:h-[calc(100vh-64px)] `}
    >
      <form onSubmit={sendMessage} className="mt-auto" noValidate={true}>
        <SendMessage />
      </form>
    </div>
  );
}
