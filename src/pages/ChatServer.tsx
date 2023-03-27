import { useState } from "react";
import { Eye } from "@svg/Index";

export default function ChatServer() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="mx-auto w-[calc(100vw-3rem)] sm:max-w-3xl bg-red-900 h-[calc(100vh-64px)] supports-[height:100dvh]:h-[calc(100dvh-64px)]">
      Hi chat server
    </div>
  );
}
