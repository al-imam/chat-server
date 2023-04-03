import Message from "@app/components/Message";
import { useEffect, useRef } from "react";
import useRealTimeUpdates from "@app/hooks/useRealTimeUpdates";
import SendMessageForm from "@app/components/SendMessageForm";

export default function ChatServer() {
  const messages = useRealTimeUpdates({
    reference: "message",
  });

  const scrollToMe = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    scrollToMe.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`flex flex-col gap-4 py-4 supports-[height:100dvh]:height-subtract-nav-dvh height-subtract-nav-vh landscape:height-subtract-nav-vh `}
    >
      <div className="flex flex-col gap-3 mt-auto overflow-x-hidden overflow-y-visible mask-image-gradient sm:gap-6 chat-room">
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
        <span ref={scrollToMe}></span>
      </div>
      <SendMessageForm />
    </div>
  );
}
