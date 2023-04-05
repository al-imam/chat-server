import { useEffect, useRef } from "react";
import useRealTimeUpdates from "@app/hooks/useRealTimeUpdates";
import MessageOrBlockCard from "@app/components/MessageOrBlockCard";
import FormOrBlockCard from "@app/components/FormOrBlockCard";

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
      <div
        className={`flex flex-col  mt-auto overflow-x-hidden overflow-y-scroll mask-image-gradient chat-room ${
          messages.length > 10 ? "gap-3 sm:gap-6" : "gap-6"
        }`}
      >
        {messages.map((message) => (
          <MessageOrBlockCard key={message.id} {...message} />
        ))}
        <span ref={scrollToMe}></span>
      </div>
      <FormOrBlockCard />
    </div>
  );
}
