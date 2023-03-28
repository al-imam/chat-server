import SendMessage from "@app/components/SendMessage";
import { FormEvent } from "react";

export default function ChatServer() {
  function sendMessage(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <div
      className={`flex flex-col py-4 gap-4 supports-[height:100dvh]:h-[calc(100dvh-64px)] h-[calc(100vh-64px)] landscape:h-[calc(100vh-64px)] `}
    >
      <div className="mt-auto overflow-y-scroll overflow-x-hidden w-[calc(100vw-3rem)] sm:max-w-3xl mx-auto">
        <p className="w-[70%]">
          Tenetur consequuntur ipsam esse eius vero nesciunt voluptatem, nihil
          porro?
        </p>
        <p className="w-[70%]">
          Doloremque aliquid id delectus quos nihil labore nam! Nesciunt, optio.
        </p>
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
