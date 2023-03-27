import SendMessage from "@app/components/SendMessage";

export default function ChatServer() {
  return (
    <div
      className={`mx-auto w-[calc(100vw-3rem)] flex flex-col sm:max-w-3xl  py-4 supports-[height:100dvh]:h-[calc(100dvh-64px)] h-[calc(100vh-64px)] landscape:h-[calc(100vh-64px)] `}
    >
      <form className="mt-auto">
        <SendMessage />
      </form>
    </div>
  );
}
